import { StoreItemType } from "../App";
type Props = {
  item: StoreItemType;
  cart: StoreItemType[];
  decreaseItemQuantity: (item: StoreItemType) => void;
  increaseItemQuantity: (item: StoreItemType) => void;
};
export function CartItem({
  item,
  decreaseItemQuantity,
  increaseItemQuantity,
}: Props) {
  return (
    <li>
      <img className="cart--item-icon" src={item.icon} alt={item.name} />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={function () {
          decreaseItemQuantity(item);
        }}
      >
        -
      </button>
      <span className="quantity-text center">{item.inCart}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={function () {
          increaseItemQuantity(item);
        }}
      >
        +
      </button>
    </li>
  );
}
