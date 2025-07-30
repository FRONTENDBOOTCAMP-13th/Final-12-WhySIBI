import SubjectDropdownCustom from '@/components/Dropdown/Subject_Dropdown_custom';

interface SubjectCategoryValue {
  [key: string]: string;
}

interface CategorySelectProps {
  value: SubjectCategoryValue;
  onChange: (value: SubjectCategoryValue) => void;
}

export default function SubjectCategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  const options = [
    {
      title: '주제',
      tag: ['홈 스타일링', '상품 추천', '계약', '집안일', '기타'],
    },
  ];

  const handleSelect = (title: string, selected: string) => {
    onChange({
      ...value,
      [title]: selected || '기타',
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {options.map(item => (
        <>
          <SubjectDropdownCustom
            key={item.title}
            title={item.title}
            category={item.tag}
            onSelect={selected => handleSelect(item.title, selected)}
          />
        </>
      ))}
    </div>
  );
}
