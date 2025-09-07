export default function OrderAddressItem({
  name,
  value,
  phone,
}: {
  name: string;
  value: string;
  phone: string;
}) {
  return (
    <li className="flex items-baseline gap-3 border-b-1 border-gray-350 py-3">
      <input type="radio" name="selectedAddress" />
      <label htmlFor="">
        <div className="font-bold">{name}</div>
        <div>{value}</div>
        <div>{phone}</div>
      </label>
    </li>
  );
}
