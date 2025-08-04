#!/bin/sh
# 레포지토리 상위 폴더로 이동
cd ../
# output 폴더 생성
mkdir output
# 레포지토리 하위의 모든 폴더와 파일을 output 하위로 복사(.gitignore, .github 같은 숨김 파일/폴더는 제외)
cp -r ./Final-12-WhySIBI/* ./output
# output 폴더를 레포지토리 하위로 이동
mv ./output ./Final-12-WhySIBI/