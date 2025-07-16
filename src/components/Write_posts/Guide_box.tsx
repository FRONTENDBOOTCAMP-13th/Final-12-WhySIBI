export default function GuideBox() {
  return (
    <div className="w-full p-4 rounded-xl bg-gradient-to-r from-vanilla to-columbia-blue text-sm text-gray-800 shadow">
      <p className="font-variable font-bold mb-2">집들이에 초대해주셔서 감사해요.</p>
      <ul className="font-logo text-xs text-gray-600 space-y-1">
        <li>† 집들이는 본인의 집을 자랑하는 공간입니다.</li>
        <li>† 관리자가 승인한 글만 홈에 노출돼요.</li>
        <li>† 불건전한 글은 삭제될 수 있습니다.</li>
      </ul>
    </div>
  );
}
