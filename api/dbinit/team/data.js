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
            path: `/files/${clientId}/cooling.png`,
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
          category: ['PC03', 'PC0302'],
          sort: 5,
          // detailimg: [
          //   {
          //     path: `/files/${clientId}/cooling.png`,
          //   },
          // ],
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
            path: `/files/${clientId}/tv.png`,
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
            path: `/files/${clientId}/pushbot.png`,
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
            path: `/files/${clientId}/curtain.png`,
            name: 'cooling.png',
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
            path: `/files/${clientId}/summercooling.png`,
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
            path: `/files/${clientId}/javara.png`,
            name: 'javara.png',
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
            path: `/files/${clientId}/topper.png`,
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
            path: `/files/${clientId}/bodyfillow.png`,
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
            path: `/files/${clientId}/minix.png`,
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
            path: `/files/${clientId}/bath.png`,
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
            path: `/files/${clientId}/cleankit.png`,
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
            path: `/files/${clientId}/cosmetic.png`,
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
            path: `/files/${clientId}/hangger.png`,
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
            path: `/files/${clientId}/coolpan.png`,
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
            path: `/files/${clientId}/theslim.png`,
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
            path: `/files/${clientId}/airflier.png`,
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
            path: `/files/${clientId}/trap.png`,
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
            path: `/files/${clientId}/bug.png`,
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
            path: `/files/${clientId}/multiport.png`,
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
            path: `/files/${clientId}/jellyfish.png`,
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
            path: `/files/${clientId}/copybara.png`,
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
            path: `/files/${clientId}/copybara2.png`,
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
            path: `/files/${clientId}/dockmood.png`,
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
            path: `/files/${clientId}/sanroconcent.png`,
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
            path: `/files/${clientId}/pabricCover.png`,
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
            path: `/files/${clientId}/smartplug.png`,
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
            path: `/files/${clientId}/deskmultitab.png`,
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
            path: `/files/${clientId}/dockmood.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sofabed.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/magsafepan.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/airsurqu.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/decotile.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minispoon.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sinamonmobil.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minisofa.png`,
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
        name: '메종드꼼마 유니온 데스크',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/maisondesk.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/moveaircon.png`,
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
        name: '우드 상판 조립식 서랍장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/wooddrawer.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sliconspoon.png`,
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
        name: '러블리 사이드 테이블',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/lovelytable.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/greentile.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/felltier.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/windowdry.png`,
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
        name: '튼튼한 문걸이 빨래건조대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/doordry.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sleepbakery.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/shoesdry.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/minifridge.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/scapeposter.png`,
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
        name: '바람찬 침낭형 침구세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/beddingset.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/vanity.png`,
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
        name: '허니팝 시어서커 여름이불',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/honeypop.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/drawtray.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minibimproject.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/ramenorganizer.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/diykitchen.png`,
            name: 'diykitchen.png',
            originalname: '주방타일29종.png',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 1900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '문쾅방지 실리콘 문손잡이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/sliconhandler.png`,
            name: 'sliconhandler.png',
            originalname: '실리콘문손잡이.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>문쾅방지 실리콘 문손잡이 상세 설명</p>
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
        price: 11900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '오싹아이스 냉감 여름이불',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/icebedding.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/partitionhangger.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/partitionorganize.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/darkcutton.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/pipehangger.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/insect.png`,
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
        name: '원룸형 가벼운 무선청소기',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/oneroomvacuum.png`,
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
        name: '냉감 오리 바디필로우',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/dockbody.png`,
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
        name: '프랑코 자석 우산꽂이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/francoumbrella.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/shoesrack.png`,
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
        name: '타공수납 전자레인지 선반',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/microwavedesk.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/zigzagtree.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/insectscreen.png`,
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
        name: '현관문 자석 모기장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/doorinsect.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/stripepartition.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/autoswitch.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/magicpartition.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/blikbimproject.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/kankan.png`,
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
        name: '썸머캔디 여름 침구 모음',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/summercandy.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/clover.png`,
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
        name: '3단 집게 양말건조대',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/socksdry.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/sinamonstick.png`,
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
        name: '농담곰 라면그릇 세트',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/ramenset.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/steamiron.png`,
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
        name: '쿨터치 여름 파자마',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/cooltouch.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/airconCleankit.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/alarmdoor.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/selftile.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/doorstopper.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/oneroomwhite.png`,
            name: 'oneroomwhite.png',
            originalname: '라면그릇세트.png',
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minicandle.png`,
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
        name: '셀프 등밀이 브러쉬',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/selfback.png`,
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
        name: '뽀글이 조각 매트 10장',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/bbogglemat.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/hipperdesk.png`,
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
        name: '1초 쿨링 바디스프레이',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/coolingbody.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/kitchenpartition.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/tabletstand.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 45900,
        shippingFees: 0,
        show: true,
        active: true,
        name: '철제 우드 H형 책상 ',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/steelwood.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/hairhangger.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/minivacuum.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/artboard.png`,
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
        name: '소프트 터치 여름 파자마',
        quantity: 320,
        buyQuantity: 310,
        mainImages: [
          {
            path: `/files/${clientId}/softtouch.png`,
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
          category: ['PC03', 'PC0301'],
          sort: 5,
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
            path: `/files/${clientId}/modernmirror.png`,
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
              path: `/files/${clientId}/bodyfillow.png`,
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
              path: `/files/${clientId}/cleankit.png`,
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
              path: `/files/${clientId}/hangger.png`,
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
            value: '여름상품',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 2,
            code: 'PC0302',
            value: '가구(패브릭)',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 3,
            code: 'PC0303',
            value: '주방용품',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 4,
            code: 'PC0304',
            value: '가전/디지털',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 5,
            code: 'PC0305',
            value: '소품/데코',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 5,
            code: 'PC0306',
            value: '수납/정리',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 5,
            code: 'PC0307',
            value: '공구/DIY',
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
