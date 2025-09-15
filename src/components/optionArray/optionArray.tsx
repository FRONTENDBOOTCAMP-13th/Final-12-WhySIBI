interface ProductCategory {
  code: string;
  value: string;
  parent?: string;
}
interface ThemeOption {
  id: string;
  name: string;
  value: string;
  text: string;
}
const ProductCategories: ProductCategory[] = [
  {
    code: 'PC0301',
    value: '여름나기 용품',
  },
  {
    code: 'PC0302',
    value: '가구 / 패브릭',
  },
  {
    code: 'PC0303',
    value: '생활용품',
  },
  {
    code: 'PC0304',
    value: '소품 / 데코',
  },
  {
    code: 'PC0305',
    value: '가전 / 디지털',
  },
  {
    code: 'PC0306',
    value: '공구 / DIY',
  },
  {
    code: 'PC0307',
    value: '수납 / 정리',
  },
  {
    code: 'PC030101',
    value: '장마 대비',
  },
  {
    code: 'PC030102',
    value: '무더위 대비',
  },
  {
    code: 'PC030201',
    value: '소파 / 의자',
  },
  {
    code: 'PC030202',
    value: '매트리스 / 토퍼',
  },
  {
    code: 'PC030203',
    value: '밥상 / 테이블 / 협탁',
  },
  {
    code: 'PC030301',
    value: '청소 / 설거지',
  },
  {
    code: 'PC030302',
    value: '주방용품',
  },
  {
    code: 'PC030303',
    value: '욕실용품',
  },
  {
    code: 'PC030304',
    value: '생필품',
  },
  {
    code: 'PC030401',
    value: '디퓨저 / 캔들',
  },
  {
    code: 'PC030402',
    value: '인테리어 소품',
  },
  {
    code: 'PC030403',
    value: '식물 / 조화',
  },
  {
    code: 'PC030404',
    value: '시계 / 데스크테리어',
  },
  {
    code: 'PC030501',
    value: '청소가전',
  },
  {
    code: 'PC030502',
    value: '휴대폰 / 태블릿PC',
  },
  {
    code: 'PC030503',
    value: '생활 / 욕실가전',
  },
  {
    code: 'PC030504',
    value: '미용가전',
  },
  {
    code: 'PC030505',
    value: '주방가전',
  },
  {
    code: 'PC030506',
    value: '영상 / 음향가전',
  },
  {
    code: 'PC030601',
    value: '벽지 / 바닥 / 시트',
  },
  {
    code: 'PC030602',
    value: '공구 / 부자재 / 기타',
  },
  {
    code: 'PC030603',
    value: '안전 / 방범 / 방한',
  },
  {
    code: 'PC030701',
    value: '서랍장 / 수납장',
  },
  {
    code: 'PC030702',
    value: '가벽 / 파티션',
  },
  {
    code: 'PC030703',
    value: '선반 / 책장 / 장식장',
  },
  {
    code: 'PC030704',
    value: '행거 / 옷장 / 신발장',
  },
];

export const ThemeOptions: ThemeOption[] = [
  {
    id: 'bathroom_decor',
    name: 'preference',
    value: 'TAG1',
    text: '🛁 욕실꾸미기',
  },
  { id: 'home_cafe', name: 'preference', value: 'TAG2', text: '☕ 홈카페' },
  { id: 'diy', name: 'preference', value: 'TAG3', text: '🎨 DIY' },
  {
    id: 'space_division',
    name: 'preference',
    value: 'TAG4',
    text: '🧹 공간 분리',
  },
  { id: 'home_work', name: 'preference', value: 'TAG5', text: '💻 재택근무' },
  {
    id: 'bedding_organize',
    name: 'preference',
    value: 'TAG6',
    text: '🛏️ 침구정리',
  },
  { id: 'solo_meal', name: 'preference', value: 'TAG7', text: '🥗 1인 식단' },
  {
    id: 'interior_design',
    name: 'preference',
    value: 'TAG8',
    text: '🛋️ 인테리어',
  },
  {
    id: 'desk_decor',
    name: 'preference',
    value: 'TAG9',
    text: '📚 책상꾸미기',
  },
  {
    id: 'digital_tag',
    name: 'preference',
    value: 'TAG10',
    text: '🎮 디지털테크',
  },
  {
    id: 'minimal_style',
    name: 'preference',
    value: 'TAG11',
    text: '🧸 미니멀',
  },
  {
    id: 'clean_freak',
    name: 'preference',
    value: 'TAG12',
    text: '🫧 청소광',
  },
];
export default ProductCategories;
