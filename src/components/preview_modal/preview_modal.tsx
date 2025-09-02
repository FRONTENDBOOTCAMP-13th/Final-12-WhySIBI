export default function RegistrationPreview({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      id="modalContainer"
      className="fixed inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        id="modalContent"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
      >
        <strong>상품 등록 상태 미리보기</strong>
        {/* <button id="modalCloseButton" onClick={onClose}>X</button> */}
      </div>
    </div>
  );
}
