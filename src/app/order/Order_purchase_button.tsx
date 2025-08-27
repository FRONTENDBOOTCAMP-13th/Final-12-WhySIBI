export default function OrderPurchaseButton() {
  return (
    <form>
      {/* <input name="product" value={JSON.stringify(product)} hidden readOnly />
      <input name="token" value={token} hidden readOnly /> */}
      <button
        // disabled={isPending}
        className={`box-border cursor-pointer bg-flame-250 w-full h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
      >
        바로구매
      </button>
    </form>
  );
}
