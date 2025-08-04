export interface ProductType {
  name: string;
  image: { path: string };
  price: number;
}

export interface CartItem {
  _id: number;
  product_id: number;
  quantity: number;
  color: string;
  size: string;
  product: ProductType;
}

export interface CartCost {
  products: number;
  total: number;
}

export interface CartData {
  item: CartItem[];
  cost: CartCost;
}

export interface CartListProps {
  id: number;
  color: string | null;
  size: string | null;
  name: string;
  img: string;
  price: number;
  quantity: number;
  token: string | undefined;
  isChecked: boolean | undefined;
  productId: number;
  handleItemCheck: (itemId: number, isChecked: boolean) => void;
  handleQuantity: (itemId: number, newQuantity: number) => void;
}
