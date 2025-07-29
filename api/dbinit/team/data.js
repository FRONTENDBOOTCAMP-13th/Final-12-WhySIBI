import dayjs from 'dayjs';

function getTime(day = 0, second = 0) {
  return dayjs()
    .add(day, 'days')
    .add(second, 'seconds')
    .format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq('user'),
        email: 'admin@market.com',
        password: '3333',
        name: '김연호',
        phone: '01011112222',
        address: '부산시 연제구',
        type: 'admin',
        loginType: 'email',
        image: `files/${clientId}/user-muzi.png`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          preference: '',
          birthday: '03-23',
          membershipClass: 'MC03',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '부산시 연제구',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '1234',
        name: '정유진',
        phone: '01022223333',
        address: '부산시 연제구',
        type: 'seller',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          preference: '',
          birthday: '11-23',
          membershipClass: 'MC01',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 삼성동 567',
            },
            {
              id: 2,
              name: '학교',
              value: '서울시 강남구 역삼동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '5678',
        name: '김하영',
        phone: '01022223333',
        address: '전라남도 목포',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          preference: '',
          birthday: '11-23',
          membershipClass: 'MC02',
          addressBook: [
            {
              id: 1,
              name: '회사',
              value: '서울시 강남구 삼성동 567',
            },
            {
              id: 2,
              name: '학교',
              value: '서울시 강남구 역삼동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 'johyunsoo123@market.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '조현수',
        phone: '01022223333',
        address: '부산 동래구 사직로 55-32(사직야구장)',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          preference: '',
          birthday: '11-23',
          membershipClass: 'MC02',
          addressBook: [
            {
              id: 1,
              name: '회사',
              value: '부산 동래구 사직로 55-32(사직야구장)',
            },
            {
              id: 2,
              name: '학교',
              value: '서울시 강남구 역삼동 234',
            },
          ],
        },
      },
    ],

    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 37900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '아이스모찌 쿨링 토퍼패드',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/cooling.png`,
            name: 'cooling.png',
            originalname: '쿨링패드.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>아이스모찌 쿨링 토퍼패드 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리', '핑크', '스카이블루', '네이비', '그레이'],
          size: ['s', 'm'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: true, //찜하기
          originalPrice: 89900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/cooling.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 236000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '중소바이미 TV세트',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/tv.png`,
            name: 'tv.png',
            originalname: '티비세트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>중소바이미 TV세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          keyword: 'TV',
          category: ['PC03', 'PC0305', 'PC030506'],
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 688000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/tv.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '스마트 불끄기 푸시봇',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/pushbot.png`,
            name: 'pushbot.png',
            originalname: '푸시봇.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스마트 불끄기 푸시봇 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          keyword: 'switch', //키워드
          category: ['PC03', 'PC0305', 'PC030503'],
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: true, //찜하기
          originalPrice: 349000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/pushbot.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17700,
        shippingFees: 0,
        show: true,
        active: true,
        name: '자국없는 벨크로 암막커튼',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/curtain.png`,
            name: 'curtain.png',
            originalname: '암막커튼.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>자국없는 벨크로 암막커튼 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리', '진그레이', '연그레이', '블랙'],
          size: ['소형', '중형'],
          keyword: 'curtain', //키워드
          category: ['PC03', 'PC0304', 'PC030402'],
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 40000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/curtain.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 39900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '써머쿨링 냉감 여름이불',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/summercooling.png`,
            name: 'summercooling.png',
            originalname: '쿨링 이불.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>써머쿨링 냉감 여름이불 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['핑크베리', '그린샤벳', '블루레몬', '그레이스톤'],
          size: ['ss', 'q'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 39900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/summercooling.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 34800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '고속충전 자바라 거치대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/jabara.png`,
            name: 'jabara.png',
            originalname: '자바라거치대.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>고속충전 자바라 거치대 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트'],
          size: [],
          keyword: 'stand', //키워드
          category: ['PC03', 'PC0305', 'PC030502'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 54900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/jabara.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 66900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '꺼짐없는 접이식 매트토퍼',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/topper.png`,
            name: 'topper.png',
            originalname: '토퍼.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>꺼짐없는 접이식 매트토퍼 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '아이보리',
            '그레이',
            '차콜',
            '시어서커_쿨민트',
            '시어서커_차콜',
            '시어서커_버터옐로우',
            '시어서커_스카이블루',
          ],
          size: ['ms', 's', 'q'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0302', 'PC030202'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 147000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/topper.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '냉감 찹쌀떡 바디필로우',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/bodyfillow.png`,
            name: 'bodyfillow.png',
            originalname: '바디필로우.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>냉감 찹쌀떡 바디필로우 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['네이비'],
          size: [],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 99000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/bodyfillow.png`,
            },
          ],
          star: 3, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 299000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '미닉스 미니 건조기 PRO+',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minix.png`,
            name: 'minix.png',
            originalname: '미닉스.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>미닉스 미니 건조기 PRO+ 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['그레이지', '네이처그린'],
          size: [],
          keyword: 'dryer', //키워드
          category: ['PC03', 'PC0305', 'PC030501'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 499000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minix.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 52900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '발뻗는 접이식 욕조',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/bath.png`,
            name: 'bath.png',
            originalname: '욕조.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>발뻗는 접이식 욕조 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bath', //키워드
          category: ['PC03', 'PC0303', 'PC030303'], // 카테고리 - 대분류, 소분류
          tag: 'TAG1', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 60000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/bath.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 14400,
        shippingFees: 0,
        show: true,
        active: true,
        name: '벽걸이 에어컨 청소 키트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/cleankit.png`,
            name: 'cleankit.png',
            originalname: '청소키트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>벽걸이 에어컨 청소 키트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'cleaning', //키워드
          category: ['PC03', 'PC0303', 'PC030304'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 20000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/cleankit.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 34900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '대용량 화장품 정리함',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/cosmetic.png`,
            name: 'cosmetic.png',
            originalname: '화장품정리함.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>대용량 화장품 정리함 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['투명/화이트'],
          size: [],
          keyword: 'organizer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 40000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/cosmetic.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 26900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '무볼트 드레스룸 행거',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/hangger.png`,
            name: 'hangger.png',
            originalname: '행거.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무볼트 드레스룸 행거 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['싱글', '더블', '멀티', '트리플'],
          keyword: 'hangger', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 43900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/hangger.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 9900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '에어컨 냉각 선풍기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/coolpan.png`,
            name: 'coolpan.png',
            originalname: '선풍기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>에어컨 냉각 선풍기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['네이비'],
          size: [],
          keyword: 'pan', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 13900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/coolpan.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 399000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '더슬림 음식물 처리기 4L',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/theslim.png`,
            name: 'theslim.png',
            originalname: '음식물처리기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>더슬림 음식물 처리기 4L 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'food_waste', //키워드
          category: ['PC03', 'PC0305', 'PC030505'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 438900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/theslim.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 59000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '대용량 에어프라이어 오븐',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/airflier.png`,
            name: 'airflier.png',
            originalname: '에어프라이어.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>대용량 에어프라이어 오븐 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'airflier', //키워드
          category: ['PC03', 'PC0305', 'PC030505'], // 카테고리 - 대분류, 소분류
          tag: 'TAG2', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 198000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/airflier.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '완벽밀폐 하수구 트랩',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/trap.png`,
            name: 'trap.png',
            originalname: '하수구트랩.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>완벽밀폐 하수구 트랩 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'cleaning', //키워드
          category: ['PC03', 'PC0303', 'PC030304'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 24900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/trap.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 8900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '해충퇴치 분필형 신기패',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/bug.png`,
            name: 'bug.png',
            originalname: '해충퇴치.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>해충퇴치 분필형 신기패 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bug', //키워드
          category: ['PC03', 'PC0303', 'PC030304'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 9900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/bug.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 49900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '냄비분리 3in1 멀티포트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/multiport.png`,
            name: 'multiport.png',
            originalname: '냄비.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>냄비분리 3in1 멀티포트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'pot', //키워드
          category: ['PC03', 'PC0303', 'PC030302'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 69800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/multiport.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 10900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '해파리 무드등 1+1',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/jellyfish.png`,
            name: 'jellyfish.png',
            originalname: '해파리무드등.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>해파리 무드등 1+1 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블루', '퍼플', '핑크', '그린'],
          size: [],
          keyword: 'mood_light', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 12900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/jellyfish.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 12900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '감기걸린 카피바라 무드등',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/copybara.png`,
            name: 'copybara.png',
            originalname: '감기걸린카피바라.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>감기걸린 카피바라 무드등 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'mood_light', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/copybara.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '츤데레 카피바라 무드등',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/copybara2.png`,
            name: 'copybara2.png',
            originalname: '츤데레카피바라.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>츤데레 카피바라 무드등 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'mood_light', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 33900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/copybara2.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '철푸덕 오리 무드등',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/dockmood.png`,
            name: 'dockmood.png',
            originalname: '오리무드등.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>철푸덕 오리 무드등 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'mood_light', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/dockmood.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 16000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '산로 무타공 콘센트 커버',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sanroconcent.png`,
            name: 'sanroconcent.png',
            originalname: '산로콘센트 커버.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>산로 무타공 콘센트 커버 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['1구', '2구', '3구'],
          keyword: 'concent', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 22100, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sanroconcent.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 9800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '패브릭 스위치/콘센트 덮개',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/pabricCover.png`,
            name: 'pabricCover.png',
            originalname: '패브릭커버.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>패브릭 스위치/콘센트 덮개 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'concent', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 15000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/pabricCover.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 15900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '스마트 플러그 Air',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/smartplug.png`,
            name: 'smartplug.png',
            originalname: '스마트플러그.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스마트 플러그 Air 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'plug', //키워드
          category: ['PC03', 'PC0303', 'PC030304'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/smartplug.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 25900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '책상 고정 멀티탭',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/deskmultitab.png`,
            name: 'deskmultitab.png',
            originalname: '책상고정멀티탭.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>책상 고정 멀티탭 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['옐로우', '블루', '그린', '오렌지'],
          size: ['3구', '5구'],
          keyword: 'multitab', //키워드
          category: ['PC03', 'PC0304', 'PC030404'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 35900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/deskmultitab.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 125900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '각도조절 집순이 소파베드',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sofabed.png`,
            name: 'sofabed.png',
            originalname: '소파베드.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>각도조절 집순이 소파베드 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리'],
          size: [],
          keyword: 'bed', //키워드
          category: ['PC03', 'PC0302', 'PC030201'], // 카테고리 - 대분류, 소분류
          tag: 'TAG5', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 150000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sofabed.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 14900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '핸즈프리 맥세이프 선풍기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/magsafepan.png`,
            name: 'magsafepan.png',
            originalname: '맥세이프선풍기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>핸즈프리 맥세이프 선풍기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['크림화이트', '다크그레이'],
          size: [],
          keyword: 'fan', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 22000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/magsafepan.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 39800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '스탠드형 에어써큘레이터',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/airsurqu.png`,
            name: 'airsurqu.png',
            originalname: '에어써큘레이터.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스탠드형 에어써큘레이터 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'fan', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 78900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/airsurqu.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 21000,
        shippingFees: 0,
        show: true,
        active: true,
        name: 'DIY 도든 데코타일',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/decotile.png`,
            name: 'decotile.png',
            originalname: '데코타일.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>DIY 도든 데코타일 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '스톤 라이트 그레이',
            '스톤 차콜 그레이',
            '오트밀 크림',
            '브레드 버터',
          ],
          size: ['47cm', '60cm'],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 39900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/decotile.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 6900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '다용도 앞접시 미니국자',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minispoon.png`,
            name: 'minispoon.png',
            originalname: '미니국자.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>다용도 앞접시 미니국자 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리', '그레이', '딥그레이', '블랙', '퍼플'],
          size: [],
          keyword: 'spoon', //키워드
          category: ['PC03', 'PC0303', 'PC030302'], // 카테고리 - 대분류, 소분류
          tag: 'TAG2', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 15900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minispoon.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 7900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '벌레퇴치 시나몬 모빌',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sinamonmobil.png`,
            name: 'sinamonmobil.png',
            originalname: '시나몬 모빌.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>벌레퇴치 시나몬 모빌 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [
            '자몽 앤 허브',
            '자몽 앤 티트리',
            '토끼 유칼립투스',
            '고슴도치 파블로',
          ],
          keyword: 'bug', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG8', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 8900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sinamonmobil.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 53900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '원룸 미니 빈백 소파',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minisofa.png`,
            name: 'minisofa.png',
            originalname: '미니소파.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>원룸 미니 빈백 소파 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['오트밀', '그레이'],
          size: ['1인용', '2인용'],
          keyword: 'bed', //키워드
          category: ['PC03', 'PC0302', 'PC030201'], // 카테고리 - 대분류, 소분류
          tag: 'TAG2', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 182000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minisofa.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 25900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '메종드꼼마 유니온 데스크',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/maisondesk.png`,
            name: 'maisondesk.png',
            originalname: '유니온데스크.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>메종드꼼마 유니온 데스크 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '우드'],
          size: ['800', '1000', '1200', '1400', '1600'],
          keyword: 'desk', //키워드
          category: ['PC03', 'PC0302', 'PC030203'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 379000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/maisondesk.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 428000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '신일 냉난방 이동식 에어컨',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/moveaircon.png`,
            name: 'moveaircon.png',
            originalname: '이동식에어컨.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>신일 냉난방 이동식 에어컨 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'aircon', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG5', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 569000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/moveaircon.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '우드 상판 조립식 서랍장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/wooddrawer.png`,
            name: 'wooddrawer.png',
            originalname: '우드서랍장.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>우드 상판 조립식 서랍장 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리', '버터옐로우'],
          size: ['m', 'l'],
          keyword: 'drawer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 29900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/wooddrawer.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 7900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '공중부양 실리콘 알뜰주걱',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sliconspoon.png`,
            name: 'sliconspoon.png',
            originalname: '실리콘알뜰주걱.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>공중부양 실리콘 알뜰주걱 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['머스타드', '올리브', '핑크', '퍼플', '진그레이'],
          size: ['s', 'm'],
          keyword: 'spoon', //키워드
          category: ['PC03', 'PC0303', 'PC030302'], // 카테고리 - 대분류, 소분류
          tag: 'TAG2', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 10000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sliconspoon.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '러블리 사이드 테이블',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/lovelytable.png`,
            name: 'lovelytable.png',
            originalname: '사이드테이블.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>러블리 사이드 테이블 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '버터'],
          size: ['m', 'l'],
          keyword: 'desk', //키워드
          category: ['PC03', 'PC0302', 'PC030203'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 69900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/lovelytable.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 4900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '그린라벨 빅 타일카페트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/greentile.png`,
            name: 'greentile.png',
            originalname: '그린라벨 카페트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>그린라벨 빅 타일카페트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '아이보리',
            '베이지',
            '크림모카',
            '브라운',
            '그레이',
            '챠콜',
            '미드나잇블루',
          ],
          size: ['50*50', '60*60'],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG8', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 8900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/greentile.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '펠티어 저소음 미니제습기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/felltier.png`,
            name: 'felltier.png',
            originalname: '미니제습기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>펠티어 저소음 미니제습기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트'],
          size: [],
          keyword: 'dehumidifier', //키워드
          category: ['PC03', 'PC0301', 'PC030101'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 159000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/felltier.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 48000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '창틀 빨래 건조대 선반',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/windowdry.png`,
            name: 'windowdry.png',
            originalname: '창틀건조대.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>창틀 빨래 건조대 선반 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['2단', '4단'],
          keyword: 'dryerstand', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 87900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/windowdry.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 39900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '튼튼한 문걸이 빨래건조대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/doordry.png`,
            name: 'doordry.png',
            originalname: '문걸이빨래건조대.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>튼튼한 문걸이 빨래건조대 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'dryerstand', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 50000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/doordry.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 23900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '슬립베이커리 토핑필로우',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sleepbakery.png`,
            name: 'sleepbakery.png',
            originalname: '토핑필로우.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>슬립베이커리 토핑필로우 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['초코필로우', '버터필로우'],
          size: [],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0302', 'PC030202'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 28900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sleepbakery.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 32800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '슈즈쏙 신발 살균건조기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/shoesdry.png`,
            name: 'shoesdry.png',
            originalname: '신발살균건조기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>슈즈쏙 신발 살균건조기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'shoes_dryer', //키워드
          category: ['PC03', 'PC0301', 'PC030101'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 39800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/shoesdry.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 42900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '미니 화장품 냉장고',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/minifridge.png`,
            name: 'minifridge.png',
            originalname: '미니화장품냉장고.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>미니 화장품 냉장고 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'cosmetic_fridge', //키워드
          category: ['PC03', 'PC0305', 'PC030504'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 99000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minifridge.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 9700,
        shippingFees: 0,
        show: true,
        active: true,
        name: '대형 풍경 패브릭 포스터',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/scapeposter.png`,
            name: 'scapeposter.png',
            originalname: '풍경패브릭포스터.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>대형 풍경 패브릭 포스터 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['창문', '일본', '반고흐', '레트로'],
          size: ['s', 'l'],
          keyword: 'poster', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG8', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 26700, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/scapeposter.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '바람찬 침낭형 침구세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/beddingset.png`,
            name: 'beddingset.png',
            originalname: '침낭형침구세트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>바람찬 침낭형 침구세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['핑크', '그레이', '네이비', '민트', '블루'],
          size: [],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 59000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/beddingset.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 77900,
        shippingFees: 0,
        show: true,
        active: true,
        name: 'DIY 커스텀 수납화장대',
        quantity: 330,
        buyQuantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/vanity.png`,
            name: 'vanity.png',
            originalname: '커스텀수납화장대.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>DIY 커스텀 수납화장대 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '버터'],
          size: ['2단', '3단'],
          keyword: 'drawer', //키워드
          category: ['PC03', 'PC0307', 'PC030703'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 140000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/vanity.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 9900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '허니팝 시어서커 여름이불',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/honeypop.png`,
            name: 'honeypop.png',
            originalname: '허니팝여름이불.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>허니팝 시어서커 여름이불 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '피치핑크',
            '레몬옐로우',
            '라임그린',
            '라벤더페리',
            '화이트',
            '진그레이',
            '오션네이비',
          ],
          size: ['ss', 'q', 'k'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/honeypop.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 3510,
        shippingFees: 0,
        show: true,
        active: true,
        name: '서랍식 옷정리 트레이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/drawtray.png`,
            name: 'drawtray.png',
            originalname: '서랍식옷정리트레이.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>서랍식 옷정리 트레이 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['s', 'm'],
          keyword: 'drawer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 5000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/drawtray.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 59900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '오브룸 미니 빔프로젝터',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minibimproject.png`,
            name: 'minibimproject.png',
            originalname: '미니빔프로젝터.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>오브룸 미니 빔프로젝터 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bim_project', //키워드
          category: ['PC03', 'PC0305', 'PC030506'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 77800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minibimproject.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 4900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '화이트 라면 정리함',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/ramenorganizer.png`,
            name: 'ramenorganizer.png',
            originalname: '라면정리함.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>화이트 라면 정리함 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['s', 'm'],
          keyword: 'organizer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 0, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/ramenorganizer.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 5500,
        shippingFees: 0,
        show: true,
        active: true,
        name: 'DIY 스티커 주방타일 28종',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/diykitchen.png`,
            name: 'diykitchen.png',
            originalname: '주방타일28종.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>DIY 스티커 주방타일 28종 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['써브웨이', '스퀘어', '해링본', '헥사곤', '롱브릭'],
          size: [],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 7500, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/diykitchen.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 11900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '오싹아이스 냉감 여름이불',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/icebedding.png`,
            name: 'icebedding.png',
            originalname: '냉감여름이불.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>오싹아이스 냉감 여름이불 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['오션블루', '쿨그레이', '스노우크림'],
          size: ['ss', 'q'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/icebedding.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 69800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '튼튼한 2단 파티션 행거',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/partitionhangger.png`,
            name: 'partitionhangger.png',
            originalname: '2단파티션행거.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>튼튼한 2단 파티션 행거 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '블랙', '그레이지'],
          size: [],
          keyword: 'hangger', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 85000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/partitionhangger.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 8800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '투명한 칸막이 속옷정리함',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/partitionorganize.png`,
            name: 'partitionorganize.png',
            originalname: '칸막이속옷정리함.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>투명한 칸막이 속옷정리함 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['투명'],
          size: ['1칸', '8칸', '16칸'],
          keyword: 'organizer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 9900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/partitionorganize.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 44900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '무타공 암막 커튼 세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/darkcutton.png`,
            name: 'darkcutton.png',
            originalname: '무타공암막커튼세트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무타공 암막 커튼 세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '블랙'],
          size: [],
          keyword: 'curtain', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG8', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 65900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/darkcutton.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17010,
        shippingFees: 0,
        show: true,
        active: true,
        name: '무너짐없는 파이프 행거',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/pipehangger.png`,
            name: 'pipehangger.png',
            originalname: '파이프행거.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무너짐없는 파이프 행거 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['1단', '2단'],
          keyword: 'hangger', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 18900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/pipehangger.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 21900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '아차거 날벌레 퇴치기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/insect.png`,
            name: 'insect.png',
            originalname: '날벌레퇴치기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>아차거 날벌레 퇴치기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bug', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 49800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/insect.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 34900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '원룸용 가벼운 무선청소기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/oneroomvacuum.png`,
            name: 'oneroomvacuum.png',
            originalname: '원룸용무선청소기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>원룸형 가벼운 무선청소기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '블랙'],
          size: [],
          keyword: 'TAG12', //키워드
          category: ['PC03', 'PC0305', 'PC030501'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 59800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/oneroomvacuum.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '냉감 오리 바디필로우',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/dockbody.png`,
            name: 'dockbody.png',
            originalname: '냉감오리바디필로우.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>냉감 오리 바디필로우 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 49900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/dockbody.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '프랑코 자석 우산꽂이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/francoumbrella.png`,
            name: 'francoumbrella.png',
            originalname: '자석우산꽂이.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>프랑코 자석 우산꽂이 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '그레이', '옐로우', '라벤더', '핑크'],
          size: [],
          keyword: 'umbrealla_stand', //키워드
          category: ['PC03', 'PC0301', 'PC030101'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 35000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/francoumbrella.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 1400,
        shippingFees: 0,
        show: true,
        active: true,
        name: '3단계 높이조절 슈즈렉',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/shoesrack.png`,
            name: 'shoesrack.png',
            originalname: '높이조절슈즈렉.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>3단계 높이조절 슈즈렉 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'shoesrack', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 3900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/shoesrack.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 34900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '타공수납 전자레인지 선반',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/microwavedesk.png`,
            name: 'microwavedesk.png',
            originalname: '전자레인지선반.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>타공수납 전자레인지 선반 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['m', 'l'],
          keyword: 'shelf', //키워드
          category: ['PC03', 'PC0307', 'PC030703'], // 카테고리 - 대분류, 소분류
          tag: 'TAG4', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 45000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/microwavedesk.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 47900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '지그재그 트리 북타워',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/zigzagtree.png`,
            name: 'zigzagtree.png',
            originalname: '트리북타워.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>지그재그 트리 북타워 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['월넛', '우드'],
          size: ['100cm', '120cm', '139cm', '158cm'],
          keyword: 'bookcase', //키워드
          category: ['PC03', 'PC0307', 'PC030703'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 60000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/zigzagtree.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 11900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '셀프교체 자석 방충망',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/insectscreen.png`,
            name: 'insectscreen.png',
            originalname: '자석방충망.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>셀프교체 자석 방충망 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['50*80', '60*120', '100*120', '130*150', '150*200'],
          keyword: 'bug', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 49000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/insectscreen.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 15900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '현관문 자석 모기장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/doorinsect.png`,
            name: 'doorinsect.png',
            originalname: '현관문모기장.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>현관문 자석 모기장 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트'],
          size: ['90x210', '100x210', '120x210'],
          keyword: 'insect', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 34900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/doorinsect.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 43900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '스트라이프 가벽 파티션',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/stripepartition.png`,
            name: 'stripepartition.png',
            originalname: '가벽파티션.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스트라이프 가벽 파티션 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '오크', '블랙'],
          size: ['310', '402', '494'],
          keyword: 'partition', //키워드
          category: ['PC03', 'PC0307', 'PC030702'], // 카테고리 - 대분류, 소분류
          tag: 'TAG4', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 71900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/stripepartition.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 4500,
        shippingFees: 0,
        show: true,
        active: true,
        name: '자동 불끄기 스위치 커버',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/autoswitch.png`,
            name: 'autoswitch.png',
            originalname: '자동불끄기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>자동 불끄기 스위치 커버 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'switch', //키워드
          category: ['PC03', 'PC0305', 'PC030503'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 4950, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/autoswitch.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 59900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '매직 가림막 파티션',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/magicpartition.png`,
            name: 'magicpartition.png',
            originalname: '매직파티션.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>매직 가림막 파티션 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트'],
          size: [],
          keyword: 'partition', //키워드
          category: ['PC03', 'PC0307', 'PC030702'], // 카테고리 - 대분류, 소분류
          tag: 'TAG4', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 97900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/magicpartition.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 99000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '블릭 미니 빔프로젝터',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/blikbimproject.png`,
            name: 'blikbimproject.png',
            originalname: '블릭빔프로젝터.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>블릭 미니 빔프로젝터 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bim_project', //키워드
          category: ['PC03', 'PC0305', 'PC030506'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 250000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/blikbimproject.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 2700,
        shippingFees: 0,
        show: true,
        active: true,
        name: '칸칸이 뚜껑 속옷정리함',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/kankan.png`,
            name: 'kankan.png',
            originalname: '칸칸이정리함.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>칸칸이 뚜껑 속옷정리함 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '스카이블루'],
          size: ['1칸', '10칸', '15칸'],
          keyword: 'organizer', //키워드
          category: ['PC03', 'PC0307', 'PC030701'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 5200, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/kankan.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 8900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '썸머캔디 여름 침구 모음',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/summercandy.png`,
            name: 'summercandy.png',
            originalname: '여름침구모음.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>썸머캔디 여름 침구 모음 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '크림멜론',
            '레모네이드',
            '크림스카이',
            '크림밀크티',
            '피치캔디',
          ],
          size: ['s', 'q'],
          keyword: 'bedding', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG6', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 14900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/summercandy.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 7500,
        shippingFees: 0,
        show: true,
        active: true,
        name: '행운의 클로버 키우기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/clover.png`,
            name: 'clover.png',
            originalname: '클로버키우기.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>행운의 클로버 키우기 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'plant', //키워드
          category: ['PC03', 'PC0304', 'PC030403'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 10000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/clover.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 8900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '3단 집게 양말건조대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/socksdry.png`,
            name: 'socksdry.png',
            originalname: '파이프행거.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>3단 집게 양말건조대 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'dryerstand', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 11900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/socksdry.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 8500,
        shippingFees: 0,
        show: true,
        active: true,
        name: '벌레퇴치 시나몬스틱 세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/sinamonstick.png`,
            name: 'sinamonstick.png',
            originalname: '시나몬스틱.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>벌레퇴치 시나몬스틱 세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bug', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 9500, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/sinamonstick.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '농담곰 라면그릇 세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/ramenset.png`,
            name: 'ramenset.png',
            originalname: '라면그릇세트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>농담곰 라면그릇 세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'bowl', //키워드
          category: ['PC03', 'PC0303', 'PC030302'], // 카테고리 - 대분류, 소분류
          tag: 'TAG7', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/ramenset.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 35900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '2in1 강력 스팀 다리미',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/steamiron.png`,
            name: 'steamiron.png',
            originalname: '스팀다리미.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>2in1 강력 스팀 다리미 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'iron', //키워드
          category: ['PC03', 'PC0305', 'PC030503'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 59900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/steamiron.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '쿨터치 여름 파자마',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/cooltouch.png`,
            name: 'cooltouch.png',
            originalname: '여름파자마.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>쿨터치 여름 파자마 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['페어리 블루', '베이비 핑크', '쿨 네이비'],
          size: ['m', 'l', 'xl'],
          keyword: 'night_wear', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 30000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/cooltouch.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 39400,
        shippingFees: 0,
        show: true,
        active: true,
        name: '셀프 에어컨청소 풀세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/airconCleankit.png`,
            name: 'airconCleankit.png',
            originalname: '에어컨청소키트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>셀프 에어컨청소 풀세트 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'cleaning', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 45030, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/airconCleankit.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 21900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '스마트 알람 도어센서',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/alarmdoor.png`,
            name: 'alarmdoor.png',
            originalname: '알람도어센서.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스마트 알람 도어센서 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'door_sensor', //키워드
          category: ['PC03', 'PC0306', 'PC030603'], // 카테고리 - 대분류, 소분류
          tag: 'TAG10', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 24090, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/alarmdoor.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 6900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '초간편 셀프시공 장판',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/selftile.png`,
            name: 'selftile.png',
            originalname: '셀프시공장판.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>초간편 셀프시공 장판 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['대진', 'kcc', 'lg', '진양'],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 8000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/selftile.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 29000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '무타공 자동 도어스토퍼',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/doorstopper.png`,
            name: 'doorstopper.png',
            originalname: '도어스토퍼.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무타공 자동 도어스토퍼 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트', '그린'],
          size: [],
          keyword: 'door_stopper', //키워드
          category: ['PC03', 'PC0306', 'PC030603'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 58000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/doorstopper.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 84000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '원룸 화이트 식탁 모음',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/oneroomwhite.png`,
            name: 'oneroomwhite.png',
            originalname: '화이트식탁.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>원룸 화이트 식탁 모음 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트'],
          size: ['800x600', '1000x600', '1200x600', '1200x800'],
          keyword: 'table', //키워드
          category: ['PC03', 'PC0302', 'PC030203'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 111000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/oneroomwhite.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 3900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '미니 촛농 오브제캔들',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minicandle.png`,
            name: 'minicandle.png',
            originalname: '오브제캔들.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>미니 촛농 오브제캔들 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [
            '도트',
            '화이트',
            '옐로우',
            '옐로우베이지',
            '핑크',
            '핑크베이지',
          ],
          size: ['s', 'm'],
          keyword: 'candle', //키워드
          category: ['PC03', 'PC0304', 'PC030401'], // 카테고리 - 대분류, 소분류
          tag: 'TAG9', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 7800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minicandle.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 12900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '셀프 등밀이 브러쉬',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/selfback.png`,
            name: 'selfback.png',
            originalname: '셀프등밀이.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>셀프 등밀이 브러쉬 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'brush', //키워드
          category: ['PC03', 'PC0303', 'PC030303'], // 카테고리 - 대분류, 소분류
          tag: 'TAG1', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 24900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/selfback.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 15900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '뽀글이 조각 매트 10장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/bbogglemat.png`,
            name: 'bbogglemat.png',
            originalname: '뽀글이조각매트.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>뽀글이 조각 매트 10장 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '퍼플', '블루', '블랙', '그레이'],
          size: [],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 30000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/bbogglemat.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 45900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '히퍼 1인용 컴퓨터 책상',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/hipperdesk.png`,
            name: 'hipperdesk.png',
            originalname: '히퍼컴퓨터책상.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>히퍼 1인용 컴퓨터 책상 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트'],
          size: ['800x400', '1000x400', '1000x600', '1200x400'],
          keyword: 'desk', //키워드
          category: ['PC03', 'PC0302', 'PC030203'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 80000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/hipperdesk.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17800,
        shippingFees: 0,
        show: true,
        active: true,
        name: '1초 쿨링 바디스프레이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/coolingbody.png`,
            name: 'coolingbody.png',
            originalname: '쿨링바디스프레이.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>1초 쿨링 바디스프레이 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: [],
          keyword: 'spray', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG3', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 18900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/coolingbody.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 12000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '기름튐방지 투명 가림막',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/kitchenpartition.png`,
            name: 'kitchenpartition.png',
            originalname: '투명가림막.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>기름튐방지 투명 가림막 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['투명'],
          size: ['40x30', '50x30'],
          keyword: 'partition', //키워드
          category: ['PC03', 'PC0303', 'PC030302'], // 카테고리 - 대분류, 소분류
          tag: 'TAG4', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 20000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/kitchenpartition.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 7900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '집게형 태블릿 거치대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/tabletstand.png`,
            name: 'tabletstand.png',
            originalname: '태블릿거치대.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>집게형 태블릿 거치대 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '블랙'],
          size: [],
          keyword: 'stand', //키워드
          category: ['PC03', 'PC0305', 'PC030502'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 19900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/tabletstand.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 45900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '철제 우드 H형 책상',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/steelwood.png`,
            name: 'steelwood.png',
            originalname: '우드책상.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>철제 우드 H형 책상 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트', '블랙'],
          size: ['1000', '1200'],
          keyword: 'desk', //키워드
          category: ['PC03', 'PC0302', 'PC030203'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 70900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/steelwood.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 6500,
        shippingFees: 0,
        show: true,
        active: true,
        name: '헤어 악세사리 행거',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/hairhangger.png`,
            name: 'hairhangger.png',
            originalname: '악세사리행거.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>헤어 악세사리 행거 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['화이트'],
          size: ['가로', '세로'],
          keyword: 'hangger', //키워드
          category: ['PC03', 'PC0307', 'PC030704'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 9900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/hairhangger.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 28900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '원룸용 미니 청소기 모음',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/minivacuum.png`,
            name: 'minivacuum.png',
            originalname: '미니청소기모음.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>원룸용 미니 청소기 모음 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['아이보리', '미드나잇블루', '그레이'],
          size: [],
          keyword: 'vacuum', //키워드
          category: ['PC03', 'PC0305', 'PC030501'], // 카테고리 - 대분류, 소분류
          tag: 'TAG12', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 49500, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/minivacuum.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 7200,
        shippingFees: 0,
        show: true,
        active: true,
        name: '한번에 방음 아트 보드',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/artboard.png`,
            name: 'artboard.png',
            originalname: '방음아트보드.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>한번에 방음 아트 보드 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['그레이', '베이지', '블루'],
          size: [],
          keyword: 'tile', //키워드
          category: ['PC03', 'PC0306', 'PC030601'], // 카테고리 - 대분류, 소분류
          tag: 'TAG5', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 8800, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/artboard.png`,
            },
          ],
          star: 4, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 19900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '소프트 터치 여름 파자마',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/softtouch.png`,
            name: 'softtouch.png',
            originalname: '여름파자마.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>소프트 터치 여름 파자마 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['스모키차콜', '더스티핑크', '딥네이비'],
          size: ['m', 'l', 'xl'],
          keyword: 'night_wear', //키워드
          category: ['PC03', 'PC0301', 'PC030102'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 30000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/softtouch.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 26000,
        shippingFees: 0,
        show: true,
        active: true,
        name: '무타공 모던 거울',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/modernmirror.png`,
            name: 'modernmirror.png',
            originalname: '모던거울.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무타공 모던 거울 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['블랙', '화이트', '골드'],
          size: ['40cm', '50cm', '60cm'],
          keyword: 'mirror', //키워드
          category: ['PC03', 'PC0303', 'PC030303'], // 카테고리 - 대분류, 소분류
          tag: 'TAG1', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 28000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/modernmirror.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 17900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '원목 수납 전신거울',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/woodmirror.png`,
            name: 'woodmirror.png',
            originalname: '전신거울.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무원목 수납 전신거울 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: [],
          size: ['m', 'l'],
          keyword: 'mirror', //키워드
          category: ['PC03', 'PC0304', 'PC030402'], // 카테고리 - 대분류, 소분류
          tag: 'TAG11', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 17900, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/woodmirror.png`,
            },
          ],
          star: 5, //별점
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 39900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '모리츠 레트로 커피머신',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `files/${clientId}/coffee.png`,
            name: 'coffee.png',
            originalname: '커피머신.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>모리츠 레트로 커피머신 상세 설명</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          color: ['그린', '브라운'],
          size: [],
          keyword: 'coffee_machine', //키워드
          category: ['PC03', 'PC0305', 'PC030505'], // 카테고리 - 대분류, 소분류
          tag: 'TAG2', //취향태그
          sort: 5,
          isLike: false, //찜하기
          originalPrice: 59000, //원가
          detailimg: [
            //세부 이미지
            {
              path: `/files/${clientId}/detail/coffee.png`,
            },
          ],
          star: 5, //별점
        },
      },
    ],

    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 8,
            seller_id: 2,
            state: 'OS020',
            name: '냉감 찹쌀떡 바디필로우',
            image: {
              path: `files/${clientId}/bodyfillow.png`,
              name: 'bodyfillow.png',
              originalname: '바디필로우.png',
            },
            quantity: 1,
            price: 29900,
            review_id: 3,
          },
        ],
        cost: {
          products: 29900,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 29900,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS020',
        products: [
          {
            _id: 11,
            seller_id: 2,
            state: 'OS020',
            name: '벽걸이 에어컨 청소 키트',
            image: {
              path: `files/${clientId}/cleankit.png`,
              name: 'cleankit.png',
              originalname: '청소키트.png',
            },
            quantity: 1,
            price: 14400,
            review_id: 3,
          },
        ],
        cost: {
          products: 14400,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 14400,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },

      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS020',
        products: [
          {
            _id: 13,
            seller_id: 2,
            state: 'OS020',
            name: '무볼트 드레스룸 행거',
            image: {
              path: `files/${clientId}/hangger.png`,
              name: 'hangger.png',
              originalname: '행거.png',
            },
            quantity: 1,
            price: 26900,
            review_id: 3,
          },
        ],
        cost: {
          products: 26900,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 26900,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
    ],

    // 후기
    review: [
      {
        _id: await nextSeq('review'),
        user_id: 3,
        user: {
          _id: 3,
          name: '김하영',
          image: `files/${clientId}/bodyfillow.png`,
        },
        order_id: 1,
        product_id: 1,
        rating: 5,
        content:
          ' 이거 사지마시고 다른거 사세요 소음이 진짜 기분 나쁘게 나요 진짜 짜증남.',
        createdAt: getTime(-4, -60 * 60 * 12),
        extra: {
          image: {
            path: `files/${clientId}/cleankit.png`,
            name: 'cleankit.png',
            originalname: '청소키트.png',
          },
          star: 1,
          date: '2020.02.01',
        },
      },
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/bodyfillow.png`,
        },
        order_id: 2,
        product_id: 1,
        rating: 5,
        content: '배송이 너무 느려요.',
        createdAt: getTime(-4, -60 * 60 * 12),
        extra: {
          image: {
            path: `files/${clientId}/bodyfillow.png`,
            name: 'bodyfillow.png',
            originalname: '청소키트.png',
          },
          star: 4,
          date: '2020.02.10',
        },
      },
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/bodyfillow.png`,
        },
        order_id: 2,
        product_id: 1,
        rating: 5,
        content: '아니 언제오냐고요 진짜 개빡치네',
        createdAt: getTime(-4, -60 * 60 * 12),
        extra: {
          image: {
            path: ``,
            name: '',
            originalname: '',
          },
          star: 1,
          date: '2020.02.11',
        },
      },
    ],

    // 장바구니
    cart: [
      // {
      //   _id: await nextSeq('cart'),
      //   user_id: 3,
      //   product_id: 1,
      //   quantity: 2,
      //   createdAt: getTime(-7, -60 * 30),
      //   updatedAt: getTime(-7, -60 * 30),
      // },
      // {
      //   _id: await nextSeq('cart'),
      //   user_id: 4,
      //   product_id: 4,
      //   quantity: 3,
      //   createdAt: getTime(-7, -60 * 30),
      //   updatedAt: getTime(-7, -60 * 30),
      // },
      // {
      //   _id: await nextSeq('cart'),
      //   user_id: 4,
      //   product_id: 15,
      //   quantity: 3,
      //   createdAt: getTime(-7, -60 * 30),
      //   updatedAt: getTime(-7, -60 * 30),
      // },
      // {
      //   _id: await nextSeq('cart'),
      //   user_id: 4,
      //   product_id: 55,
      //   quantity: 3,
      //   createdAt: getTime(-7, -60 * 30),
      //   updatedAt: getTime(-7, -60 * 30),
      // },
    ],

    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        user: {
          _id: 3,
          name: '김하영',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'product',
        target_id: 2,
        memo: '첫째 크리스마스 선물.',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'product',
        target_id: 5,
        memo: '여자친구 선물.',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'product',
        target_id: 1,
        memo: '그냥해봄',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'product',
        target_id: 2,
        memo: '불만있냐',
        createdAt: getTime(-3, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'post',
        target_id: 3,
        memo: '나 김하영인데',
        createdAt: getTime(-3, -60 * 60 * 2),
        image: `/files/${clientId}/detail/coffee.png`,
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: 'post',
        target_id: 4,
        memo: '에러방 다녀옴',
        createdAt: getTime(-3, -60 * 60 * 2),
        image: `/files/${clientId}/detail/curtain.png`,
      },
    ],

    // QnA, 공지사항 등의 게시판
    post: [
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 5,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        title: '크기가 얼마만한가요?',
        content: '아이가 6살인데 가지고 놀기 적당한 크기인가요?',
        replies: [
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 2,
              name: '정유진',
              image: 'user-neo.png',
            },
            content: '크기는 상품 상세정보에 나와 있습니다.',
            like: 5,
            createdAt: getTime(-2, -60 * 60 * 20),
            updatedAt: getTime(-2, -60 * 60 * 2),
          },
        ],
        createdAt: getTime(-3, -60 * 60 * 2),
        updatedAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 50,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        title: '이번주 토요일까지 받아볼 수 있을까요?',
        content: '토요일 생일 선물로 준비중인데 그때까지 배송 가능할까요?',
        createdAt: getTime(-2, -60 * 60 * 1),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 50,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        title: '대답',
        content: '토요일 생일 선물로 준비중인데 그때까지 배송 가능할까요?',
        createdAt: getTime(-2, -60 * 60 * 1),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 50,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        title: '대답',
        content: '토요일 생일 선물로 준비중인데 그때까지 배송 가능할까요?',
        createdAt: getTime(-2, -60 * 60 * 1),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 1,
        seller_id: 2,
        views: 50,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        title: '리뷰이벤트도 있죠?',
        content: '토요일 생일 선물로 준비중인데 그때까지 배송 가능할까요?',
        createdAt: getTime(-2, -60 * 60 * 1),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('post'),
        type: 'qna',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '배송 빨리 보내주세요.',
        content: '양품으로 보내주세요.',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '하영님 쇼룸 예시',
        content: '예시123123 나 김하영임',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '하영님 쇼룸 예시2',
        content: '예시123123 나 김하영임22222',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '하영님 쇼룸 예시3',
        content: '23423432423423',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '하영님 쇼룸 예시4',
        content: '내 목포 김하영인데',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'talk',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '하영님 상담소 예시',
        content: '예시123123 나 김하영임',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'talk',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: '마 니들 목포 김하영 아나?',
        content: '예시123123 나 김하영임',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },

      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: 'ㅎㅇㅎㅇ',
        content: '예시123123 나 김하영임',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('post'),
        type: 'showRoom',
        product_id: 4,
        seller_id: 2,
        views: 0,
        user: {
          _id: 3,
          name: '김하영',
          image: 'user-neo.png',
        },
        title: 'ㅂㅇㅂㅇ',
        content: '예시123123 나 김하영임',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
    ],

    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
          //제일 큰 분류 추천상품, 베스트, 카테고리
          {
            sort: 1,
            code: 'PC01',
            value: '추천 상품',
            depth: 1,
          },
          {
            sort: 2,
            code: 'PC02',
            value: '베스트',
            depth: 1,
          },
          {
            sort: 3,
            code: 'PC03',
            value: '카테고리',
            depth: 1,
          },

          // 카테고리별 분류 여름상품, 가구/패브릭, 생활용품,
          {
            sort: 4,
            code: 'PC0301',
            value: '여름나기 용품',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 5,
            code: 'PC0302',
            value: '가구 / 패브릭',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 6,
            code: 'PC0303',
            value: '생활용품',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 6,
            code: 'PC0304',
            value: '소품 / 데코',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 7,
            code: 'PC0305',
            value: '가전 / 디지털',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 8,
            code: 'PC0306',
            value: '공구 / DIY',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 9,
            code: 'PC0307',
            value: '수납 / 정리',
            parent: 'PC03',
            depth: 2,
          },

          //카테고리별 세부카테고리

          //여름나기 용품 세부카테고리 2개
          {
            sort: 10,
            code: 'PC030101',
            value: '장마 대비',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 11,
            code: 'PC030102',
            value: '무더위 대비',
            parent: 'PC0301',
            depth: 3,
          },

          //가구 세부카테고리 3개
          {
            sort: 12,
            code: 'PC030201',
            value: '소파 / 의자',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 13,
            code: 'PC030202',
            value: '매트리스 / 토퍼',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 14,
            code: 'PC030203',
            value: '밥상 / 테이블 / 협탁',
            parent: 'PC0302',
            depth: 3,
          },

          //생활용품 세부 카테고리 4개
          {
            sort: 15,
            code: 'PC030301',
            value: '청소 / 설거지',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 16,
            code: 'PC030302',
            value: '주방용품',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 17,
            code: 'PC030303',
            value: '욕실용품',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 18,
            code: 'PC030304',
            value: '생필품',
            parent: 'PC0303',
            depth: 3,
          },

          //소품, 데코 세부카테고리4개
          {
            sort: 19,
            code: 'PC030401',
            value: '디퓨저 / 캔들',
            parent: 'PC0304',
            depth: 3,
          },
          {
            sort: 20,
            code: 'PC030402',
            value: '인테리어 소품',
            parent: 'PC0304',
            depth: 3,
          },
          {
            sort: 21,
            code: 'PC030403',
            value: '식물 / 조화',
            parent: 'PC0304',
            depth: 3,
          },
          {
            sort: 22,
            code: 'PC030404',
            value: '시계 / 데스크테리어',
            parent: 'PC0304',
            depth: 3,
          },

          //가전 / 디지털 세부카테고리 6개
          {
            sort: 23,
            code: 'PC030501',
            value: '청소가전',
            parent: 'PC0305',
            depth: 3,
          },
          {
            sort: 24,
            code: 'PC030502',
            value: '휴대폰 / 태블릿PC',
            parent: 'PC0305',
            depth: 3,
          },
          {
            sort: 25,
            code: 'PC030503',
            value: '생활 / 욕실가전',
            parent: 'PC0305',
            depth: 3,
          },
          {
            sort: 26,
            code: 'PC030504',
            value: '미용가전',
            parent: 'PC0305',
            depth: 3,
          },
          {
            sort: 27,
            code: 'PC030505',
            value: '주방가전',
            parent: 'PC0305',
            depth: 3,
          },
          {
            sort: 28,
            code: 'PC030506',
            value: '영상 / 음향가전',
            parent: 'PC0305',
            depth: 3,
          },

          //공구 / DIY 세부카테고리 3개
          {
            sort: 29,
            code: 'PC030601',
            value: '벽지 / 바닥 / 시트',
            parent: 'PC0306',
            depth: 3,
          },
          {
            sort: 30,
            code: 'PC030602',
            value: '공구 / 부자재 / 기타',
            parent: 'PC0306',
            depth: 3,
          },
          {
            sort: 31,
            code: 'PC030603',
            value: '안전 / 방범 / 방한',
            parent: 'PC0306',
            depth: 3,
          },

          //수납 / 정리 세부카테고리 4개
          {
            sort: 32,
            code: 'PC030701',
            value: '서랍장 / 수납장',
            parent: 'PC0307',
            depth: 3,
          },
          {
            sort: 33,
            code: 'PC030702',
            value: '가벽 / 파티션',
            parent: 'PC0307',
            depth: 3,
          },
          {
            sort: 34,
            code: 'PC030703',
            value: '선반 / 책장 / 장식장',
            parent: 'PC0307',
            depth: 3,
          },
          {
            sort: 34,
            code: 'PC030704',
            value: '행거 / 옷장 / 신발장',
            parent: 'PC0307',
            depth: 3,
          },
        ],
      },

      //취향 태그
      {
        _id: 'tag',
        title: '취향태그',
        codes: [
          {
            sort: 1,
            code: 'TAG1',
            value: '욕실꾸미기',
          },
          {
            sort: 2,
            code: 'TAG2',
            value: '홈카페',
          },
          {
            sort: 3,
            code: 'TAG3',
            value: 'DIY',
          },
          {
            sort: 4,
            code: 'TAG4',
            value: '공간분리',
          },
          {
            sort: 5,
            code: 'TAG5',
            value: '재택근무',
          },
          {
            sort: 6,
            code: 'TAG6',
            value: '침구정리',
          },
          {
            sort: 7,
            code: 'TAG7',
            value: '1인식단',
          },
          {
            sort: 8,
            code: 'TAG8',
            value: '인테리어',
          },
          {
            sort: 9,
            code: 'TAG9',
            value: '책상꾸미기',
          },
          {
            sort: 10,
            code: 'TAG10',
            value: '디지털테크',
          },
          {
            sort: 11,
            code: 'TAG11',
            value: '미니멀',
          },
          {
            sort: 12,
            code: 'TAG12',
            value: '청소광',
          },
        ],
      },

      {
        _id: 'orderState',
        title: '주문 상태',
        codes: [
          {
            sort: 1,
            code: 'OS010',
            value: '상품준비중',
          },
          {
            sort: 2,
            code: 'OS020',
            value: '배송준비중',
          },
          {
            sort: 3,
            code: 'OS030',
            value: '배송중',
          },
          {
            sort: 4,
            code: 'OS035',
            value: '배송완료',
          },
        ],
      },

      {
        _id: 'membershipClass',
        title: '회원 등급',
        codes: [
          {
            sort: 1,
            code: 'MC01',
            value: '일반',
            discountRate: 0, // 할인율
          },
          {
            sort: 2,
            code: 'MC02',
            value: '프리미엄',
            discountRate: 10,
          },
          {
            sort: 3,
            code: 'MC03',
            value: 'VIP',
            discountRate: 20,
          },
        ],
      },
    ],

    // 설정
    config: [
      {
        _id: 'shippingFees',
        title: '배송비',
        value: 3500,
      },
      {
        _id: 'freeShippingFees',
        title: '배송비 무료 금액',
        value: 50000,
      },
    ],
  };
};
