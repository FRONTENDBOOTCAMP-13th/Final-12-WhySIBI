import { AddressItem } from './Order_info';

export default function OrderAddressItem({
  name,
  value,
  phone,
  id,
  delivery,
  handleDelivery,
  formatPhone,
}: {
  name: string;
  value: string;
  phone: string;
  id: number;
  delivery: AddressItem | undefined;
  handleDelivery: (number: number) => void;
  formatPhone: (string: string | undefined) => string | undefined;
}) {
  return (
    <li className="flex items-baseline gap-3 border-b-1 border-gray-350 py-3">
      <input
        type="radio"
        name="selectedAddress"
        id={id.toString()}
        checked={id === delivery?.id}
        onClick={() => handleDelivery(id)}
      />
      <label htmlFor={id.toString()}>
        <div className="font-bold">{name}</div>
        <div>{value}</div>
        <div>{formatPhone(phone)}</div>
      </label>
    </li>
  );
}
