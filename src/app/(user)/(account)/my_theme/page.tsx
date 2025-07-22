'use client';
import InputCheckBox from '@/components/Input/input_checkbox';
import { useState } from 'react';

interface IsClickProps {
  state: boolean;
  onClose: () => void;
}

export default function MyTheme({ state, onClose }: IsClickProps) {
  const [checkTag, setCheckTag] = useState<string[]>([]);
  const handleTag = () => {
    const checkedInputs = document.querySelectorAll(
      'input[name="preference"]:checked',
    );
    const selectedTags = Array.from(checkedInputs).map(
      input => (input as HTMLInputElement).value,
    );
    setCheckTag(selectedTags);
  };
  return (
    <>
      <div className={`mt-9 ${state ? 'block' : 'hidden'} relative`}>
        <h3 className="text-center font-basic font-bold py-2 text-size-md border-2 rounded-full bg-linear-[90deg,rgba(255,238,188,0.50)_0%,rgba(212,232,248,0.50)_100%] mb-16">
          요즘 자취의 관심사를 알려주세요
        </h3>
        <div className="grid grid-cols-3 grid-rows-[repeat(5,auto)_40px_auto] items-center gap-5">
          <InputCheckBox
            text={'🛁 욕실꾸미기'}
            idValue={'bathroom_decor'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/bathroom_deco.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'☕ 홈카페'}
            idValue={'home_cafe'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/home_cafe.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'💻 재택근무'}
            idValue={'home_work'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/home_work.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🥗 1인 식단'}
            idValue={'solo_meal'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/solo_meal.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🧹 공간 분리'}
            idValue={'space_division'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/space_division.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🎨 DIY'}
            idValue={'diy'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/diy.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'📚 책상꾸미기'}
            idValue={'desk_decor'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/desk_decor.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🛋️ 인테리어'}
            idValue={'interior_design'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/interior_design.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🧸 미니멀'}
            idValue={'minimal_style'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/minimal_style.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🎮 디지털테크'}
            idValue={'digital_tag'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/digital_tag.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🫧 청소광'}
            idValue={'clean_freak'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/clean_freak.png'}
            onTagChange={handleTag}
          />
          <InputCheckBox
            text={'🛏️ 침구정리'}
            idValue={'bedding_organize'}
            inputType={'checkbox'}
            bgImg={'/image/theme_image/bedding_organize.png'}
            onTagChange={handleTag}
          />
          <div className="selected_tag_area w-full row-start-5 col-span-3 ">
            {checkTag && checkTag.length > 0 ? (
              <div className="flex flex-row flex-wrap gap-2 font-basic font-bold items-center -translat-x-1/2">
                선택된 취향 태그 :
                {checkTag.map((tag, i) => (
                  <ul
                    className="flex flex-row gap-2 font-basic font-bold "
                    key={i}
                  >
                    <li className="p-2 rounded-radius-full border-2 border-button-color-opaque-25">
                      # {tag}
                    </li>
                  </ul>
                ))}
              </div>
            ) : (
              <div className="font-basic font-bold">취향을 선택해 주세요</div>
            )}
          </div>
          <button
            type="button"
            className=" row-start-6 col-span-3 block nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
            onClick={onClose}
          >
            취향선택 완료
          </button>
        </div>
      </div>
    </>
  );
}
