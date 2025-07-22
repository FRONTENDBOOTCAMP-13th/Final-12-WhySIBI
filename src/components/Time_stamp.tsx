//타임 스탬프 컴포넌트

import { useEffect, useState } from 'react';

//현재 Date() 00:00 처럼 나타내기
function getTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0'); //00시 붙이기
  const minutes = now.getMinutes().toString().padStart(2, '0'); //00분 붙이기
  return `${hour}:${minutes}`;
}

function TimeStamp() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000); //1초마다 불러오기

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{time}</span>;
}
export default TimeStamp;
