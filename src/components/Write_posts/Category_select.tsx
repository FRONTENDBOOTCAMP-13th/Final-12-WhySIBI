import DropdownCustom from "@/components/Dropdown/Dropdown_custom";

export default function CategorySelect() {
  const options = [
    { title: '주거형태', category: ['원룸', '투룸', '오피스텔', '빌라'] },
    { title: '방개수', category: ['1개', '2개', '3개 이상'] },
    { title: '작업자', category: ['셀프 • DIY', '반셀프', '전문가'] },
    { title: '반려동물 유무', category: ['없음', '강아지', '고양이', '어류', '조류', '파충류', '기타'] },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options.map((item) => (
        <DropdownCustom
          key={item.title}
          title={item.title}
          category={item.category}
        />
      ))}
    </div>
  );
}
