import { StoreItemType } from "../App";
type Props = {
  item: StoreItemType;
  increaseItemQuantity: (item: StoreItemType) => void;
};
export function StoreItem({ item, increaseItemQuantity }: Props) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={item.icon} />
      </div>
      <button
        onClick={function () {
          increaseItemQuantity(item);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
