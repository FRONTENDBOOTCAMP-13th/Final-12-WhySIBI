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
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '김연호',
        phone: '01011112222',
        address: '부산시 연제구',
        type: 'admin',
        loginType: 'email',
        image: `/files/${clientId}/user-muzi.png`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
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
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '정유진',
        phone: '01022223333',
        address: '부산시 연제구',
        type: 'seller',
        loginType: 'email',
        image: `/files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
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
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '김하영',
        phone: '01022223333',
        address: '전라남도 목포',
        type: 'user',
        loginType: 'email',
        image: `/files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
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
        email: 's1@market.com',
        password:
          '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '조현수',
        phone: '01022223333',
        address: '서울시 강남구 삼성동 456',
        type: 'user',
        loginType: 'email',
        image: `/files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/cooling.jpg`,
            name: 'cooling.jpg',
            originalname: '쿨링패드.jpg',
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
          category: ['PC03', 'PC0302'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/tv.jpg`,
            name: 'tv.jpg',
            originalname: '티비세트.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/pushbot.jpg`,
            name: 'pushbot.jpg',
            originalname: '푸시봇.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/curtain.jpg`,
            name: 'cooling.jpg',
            originalname: '암막커튼.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/summercooling.jpg`,
            name: 'summercooling.jpg',
            originalname: '쿨링 이불.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/javara.jpg`,
            name: 'javara.jpg',
            originalname: '자바라거치대.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/topper.jpg`,
            name: 'topper.jpg',
            originalname: '토퍼.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/bodyfillow.jpg`,
            name: 'bodyfillow.jpg',
            originalname: '바디필로우.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minix.jpg`,
            name: 'minix.jpg',
            originalname: '미닉스.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/bath.jpg`,
            name: 'bath.jpg',
            originalname: '욕조.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/cleankit.jpg`,
            name: 'cleankit.jpg',
            originalname: '청소키트.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/cosmetic.jpg`,
            name: 'cosmetic.jpg',
            originalname: '화장품정리함.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/hangger.jpg`,
            name: 'hangger.jpg',
            originalname: '행거.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/coolpan.jpg`,
            name: 'coolpan.jpg',
            originalname: '선풍기.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/theslim.jpg`,
            name: 'theslim.jpg',
            originalname: '음식물처리기.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/airflier.jpg`,
            name: 'airflier.jpg',
            originalname: '에어프라이어.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/trap.jpg`,
            name: 'trap.jpg',
            originalname: '하수구트랩.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/bug.jpg`,
            name: 'bug.jpg',
            originalname: '해충퇴치.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 54900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '냄비분리 3in1 멀티포트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/multiport.jpg`,
            name: 'multiport.jpg',
            originalname: '냄비.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/jellyfish.jpg`,
            name: 'jellyfish.jpg',
            originalname: '해파리무드등.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/copybara.jpg`,
            name: 'copybara.jpg',
            originalname: '감기걸린카피바라.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/copybara2.jpg`,
            name: 'copybara2.jpg',
            originalname: '츤데레카피바라.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/dockmood.jpg`,
            name: 'dockmood.jpg',
            originalname: '오리무드등.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sanroconcent.jpg`,
            name: 'sanroconcent.jpg',
            originalname: '산로콘센트 커버.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/pabricCover.jpg`,
            name: 'pabricCover.jpg',
            originalname: '패브릭커버.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/smartplug.jpg`,
            name: 'smartplug.jpg',
            originalname: '스마트플러그.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/deskmultitab.jpg`,
            name: 'deskmultitab.jpg',
            originalname: '책상고정멀티탭.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/dockmood.jpg`,
            name: 'dockmood.jpg',
            originalname: '오리무드등.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/dockmood.jpg`,
            name: 'dockmood.jpg',
            originalname: '오리무드등.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/dockmood.jpg`,
            name: 'dockmood.jpg',
            originalname: '오리무드등.jpg',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
              path: `/files/${clientId}/bodyfillow.jpg`,
              name: 'bodyfillow.jpg',
              originalname: '바디필로우.jpg',
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
              path: `/files/${clientId}/cleankit.jpg`,
              name: 'cleankit.jpg',
              originalname: '청소키트.jpg',
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
              path: `/files/${clientId}/hangger.jpg`,
              name: 'hangger.jpg',
              originalname: '행거.jpg',
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
          image: 'user-jayg.webp',
        },
        order_id: 1,
        product_id: 8,
        rating: 5,
        content: '아이가 좋아해요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '조현수',
          image: 'user-jayg.webp',
        },
        order_id: 3,
        product_id: 13,
        rating: 5,
        content: '배송이 너무 느려요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
    ],

    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        user_id: 3,
        product_id: 1,
        quantity: 2,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 4,
        quantity: 3,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
    ],

    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        user: {
          _id: 3,
          name: '김하영',
          image: `/files/${clientId}/user-jayg.webp`,
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
          image: `/files/${clientId}/user-jayg.webp`,
        },
        type: 'product',
        target_id: 5,
        memo: '여자친구 선물.',
        createdAt: getTime(-3, -60 * 60 * 2),
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
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 4,
              name: '조현수',
              image: 'user-jayg.webp',
            },
            content: '어디있나 모르겠어요.',
            like: 7,
            createdAt: getTime(-2, -60 * 60 * 10),
            updatedAt: getTime(-2, -60 * 60 * 1),
          },
          {
            _id: await nextSeq('reply'),
            user: {
              _id: 2,
              name: '정유진',
              image: 'user-neo.png',
            },
            content: '높이 60cm 입니다.',
            like: 3,
            createdAt: getTime(-2, -60 * 60 * 9),
            updatedAt: getTime(-1, -60 * 60 * 20),
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
    ],

    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
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

          {
            sort: 1,
            code: 'PC0301',
            value: '커튼/블라인드/부자재',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 2,
            code: 'PC0302',
            value: '바디필로우/쿠션/담요',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 3,
            code: 'PC0303',
            value: '잠옷/실내화/가운',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 4,
            code: 'PC0304',
            value: '선풍기',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 5,
            code: 'PC0305',
            value: '무드등',
            parent: 'PC03',
            depth: 2,
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
