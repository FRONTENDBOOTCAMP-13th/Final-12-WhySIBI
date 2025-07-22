export default function GuideBox() {
  return (
    <div className="w-[600px] px-12 py-8 rounded-3xl shadow outline-1 bg-linear-to-b from-vanilla-100 to-columbia-blue-100">
      <p className="font-variable text-lg font-bold mb-2">집들이에 초대해주셔서 감사해요.</p>
      <ul className="font-logo text-md">
        <li>† 집들이는 본인의 집을 자랑하는 공간입니다. 이외의 내용으로 글을 작성할 시 반려될 수 있습니다.</li>
        <li>† 관리자가 승인한 글만 피드나 홈을 통해 노출되며, 선정 여부는 알림을 통해 알려드립니다.</li>
        <li>† 불건전한 콘텐츠 작성이 확인될 경우, 즉시 삭제될 수 있습니다.</li>
      </ul>
    </div>
  );
}
