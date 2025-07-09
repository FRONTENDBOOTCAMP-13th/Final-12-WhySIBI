import fs from 'node:fs';
import { readdir } from 'node:fs/promises';
import { GridFSBucket } from 'mongodb';
import getDB from './getDB.js';
import dotenv from 'dotenv';

// 기본 .env 파일 로딩(package.json에서 로딩함)
dotenv.config({ path: '.env' });
// 환경별 .env 파일 로딩
console.log('NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV) {
  dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV}` });
}

const imageUpload = process.env.IMAGE_UPLOAD || 'update';
const clientId = process.env.CLIENT_ID;
const targetDir = process.env.TARGET_DIR;
const { db, client, nextSeq } = await getDB(clientId);
const sampleFileFolder = `./${targetDir}/uploadFiles`;
const bucket = new GridFSBucket(db, {
  bucketName: 'upload'
});

// mongodb의 GridFS를 이용한 파일 저장
async function uploadFileToGridFS(filename) {
  const filepath = `${sampleFileFolder}/${filename}`;
  return new Promise((resolve, reject) => {
    try {  
      const uploadStream = bucket.openUploadStream(filename);
      const fileStream = fs.createReadStream(filepath);
  
      fileStream.on('data', (chunk) => {
        uploadStream.write(chunk);
      });
      
      fileStream.on('end', () => {
        uploadStream.end(() => {
          console.log(`파일 업로드: ${filename}`);
          resolve();
        });
      });
    } catch (err) {
      console.error(err);
      reject();
    }
  });
  
}

// mongodb의 GridFS를 이용한 파일 삭제
async function deleteFileFromGridFS(filename) {
  const fileDoc = await db.collection(`upload.files`).findOne({ filename });
  if (fileDoc) {
    await bucket.delete(fileDoc._id); // GridFS에서 파일 삭제
    console.log(`파일 삭제: ${filename}`);
  }
}


// DB에 저장된 파일 목록 조회
const getDBFiles = async () => {
  try {
    const files = await bucket.find().project({ filename: 1 }).toArray();
    return files.map(file => file.filename);
  } catch (err) {
    console.error(err)
  }
}

async function initDB(initData) {
  // 데이터 등록
  for(const collection in initData){
    const data = initData[collection];
    if(data.length > 0){
      await db[collection].insertMany(data);
    }
    console.debug(`${collection} ${data.length}건 등록.`);
  }

  // 이미지 등록
  const dbFiles = await getDBFiles();
  const folderFiles = await readdir(sampleFileFolder);

  let uploadFiles = [];
  let deleteFiles = [];
  switch(imageUpload){
    case 'always':
      uploadFiles = folderFiles;
      // deleteFiles = dbFiles;
      break;
    case 'update':
      // db 파일이 폴더에 없으면 삭제
      deleteFiles = dbFiles.filter(file => !folderFiles.includes(file));

      // 폴더의 파일이 db에 없으면 업로드
      uploadFiles = folderFiles.filter(file => !dbFiles.includes(file));
      
      break;
    case 'none':
    default:
  }

  for(const fileName of deleteFiles){
    await deleteFileFromGridFS(fileName);
  }

  for(const fileName of uploadFiles){
    await uploadFileToGridFS(fileName);
  }
}

// 파일 컬렉션을 제외하고 모든 컬렉션 삭제
async function dropDatabase(){
  // 데이터베이스 내 모든 컬렉션 이름 가져오기
  const collections = await db.listCollections().toArray();

  for (const collection of collections) {
    if (collection.name !== 'upload.files' && collection.name !== 'upload.chunks') {
      await db.collection(collection.name).drop();
      console.info(`DB 삭제: ${collection.name}`);
    }
  }
}

import(`./${targetDir}/data.js`).then(async ({ initData }) => {
  if(imageUpload === 'always'){
    await db.dropDatabase(); // 전체 삭제
  }else{
    await dropDatabase(); // 파일 컬렉션 제외하고 삭제
  }

  await initDB(await initData(clientId, nextSeq));
  client.close();
  console.info('DB 초기화 완료.');
});


