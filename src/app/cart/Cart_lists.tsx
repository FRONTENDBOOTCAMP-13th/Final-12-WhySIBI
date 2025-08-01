export default function CartLists() {
  return (
    <div className="min-w-[630px] flex flex-col gap-6">
      <div className="border-1 px-5 py-3 rounded-2xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="allcheck"
            className="w-4 h-4"
            checked={allcheck}
            onChange={handleAllCheck}
          />
          <label htmlFor="allcheck" className="text-lg text-gray-550">
            모두 선택
          </label>
        </div>
        <CartAllDeleteButton checkedItems={checkedItems} />
      </div>

      {/* 장바구니 목록 영역 */}
      <ul className="flex flex-col border-1 px-5 pt-3 rounded-2xl">
        {cartData?.item.map(item => {
          return (
            <CartList
              key={item._id}
              id={item._id}
              color={item.color || null}
              size={item.size || null}
              name={item.product.name}
              img={item.product.image.path}
              price={item.product.price}
              quantity={item.quantity}
              token={token}
              // checkedItem배열에 포함되어 있냐 없냐로checked설정
              isChecked={checkedItems?.includes(item._id)}
              handleItemCheck={handleItemCheck}
              handleQuantity={handleQuantity}
            />
          );
        })}
      </ul>
    </div>
  );
}
