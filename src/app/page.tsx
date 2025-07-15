import ButtonBasic from '@/components/Buttons/Button_basic';
import ButtonRounded from '@/components/Buttons/Button_rounded';
import ButtonQuestion from '@/components/Buttons/Button_question';
import DropdownTime from '@/components/Dropdown/Dropdown_time';
import DropdownSize from '@/components/Dropdown/Dropdown_size';
import InputRefly from '@/components/Input/Input_reply';
import InputId from '@/components/Input/Input_id';
import InputSearch from '@/components/Input/input_search';
import Pagenation from '@/components/Pagenation';

export default function Home() {
  return (
    <>
      <ButtonBasic
        text={'장바구니'}
        background={'white'}
        color={'flame-250'}
      ></ButtonBasic>
      &nbsp;
      <ButtonBasic
        text={'바로구매'}
        background={'flame-250'}
        color={'white'}
      ></ButtonBasic>
      &nbsp;
      <ButtonQuestion></ButtonQuestion>
      &nbsp;
      <ButtonRounded
        text={'상품태그'}
        background={'vanilla-300'}
      ></ButtonRounded>
      &nbsp;
      <ButtonRounded
        text={'발행신청'}
        background={'columbia-blue-250'}
      ></ButtonRounded>
      &nbsp;
      <DropdownTime></DropdownTime>
      &nbsp;
      <DropdownSize></DropdownSize>
      &nbsp;
      <InputRefly></InputRefly>
      &nbsp;
      <InputId></InputId>
      &nbsp;
      <InputSearch></InputSearch>
      &nbsp;
      <Pagenation></Pagenation>
    </>
  );
}
