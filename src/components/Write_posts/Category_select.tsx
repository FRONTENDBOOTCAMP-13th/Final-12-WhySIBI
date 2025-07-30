import DropdownCustom from "@/components/Dropdown/Dropdown_custom";

interface CategoryValue {
  [key: string]: string;
}

interface CategorySelectProps {
  value: CategoryValue;
  onChange: (value: CategoryValue) => void;
}

export default function CategorySelect({ value, onChange }: CategorySelectProps) {
  const options = [
    { title: '주거형태', tag: ['원룸', '투룸', '복층'] },
    { title: '방개수', tag: ['1개', '2개', '3개 이상'] },
    { title: '작업자', tag: ['셀프 • DIY', '반셀프', '전문가'] },
    { title: '반려동물 유무', tag: ['없음', '강아지', '고양이', '어류', '조류', '파충류', '기타'] },
  ];

  const handleSelect = (title: string, selected: string) => {
    onChange({
      ...value,
      [title]: selected,
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {options.map((item) => (
        <DropdownCustom
          key={item.title}
          title={item.title}
          category={item.tag}
          value={value[item.title] || ''}
          onSelect={(selected) => handleSelect(item.title, selected)}
        />
      ))}
    </div>
  );
}
