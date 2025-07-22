'use client';
import PostCard from '@/components/PostCard';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownTime from '@/components/Dropdown/Dropdown_time';

export default function PostCardPage() {

  return (
    <div className="post-list-wrapper bg-white p-20">
      <div className="post-header flex justify-between pl-5 mb-10">
        <div className="title-wrapper flex items-center">
          <Title title={'집들이🏠'} subTitle={'우리집에 왜 왔니'}></Title>
        </div>
        <div className="button-wrapper flex items-center">
          <DropdownTime></DropdownTime>
          <ButtonNew></ButtonNew>
        </div>
      </div>
      <PostCard></PostCard>
    </div>
  );
}
