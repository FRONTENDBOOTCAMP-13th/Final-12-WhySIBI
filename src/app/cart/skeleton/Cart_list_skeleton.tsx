import CartItemSkeleton from './Cart_item_skeleton';

export default function CartListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <CartItemSkeleton key={`cart-item-skeleton-${idx}`} />);
}
