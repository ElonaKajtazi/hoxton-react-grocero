import { StoreItemType } from "../App";
import { CartItem } from "./CartItem";

type Props = {
  cart: StoreItemType[];
  decreaseItemQuantity: (item: StoreItemType) => void;
  increaseItemQuantity: (item: StoreItemType) => void;
  total: string;
};
export function Cart({
  cart,
  decreaseItemQuantity,
  increaseItemQuantity,
  total,
}: Props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map((item) => (
            <CartItem
              item={item}
              decreaseItemQuantity={decreaseItemQuantity}
              increaseItemQuantity={increaseItemQuantity}
            />
          ))}
        </ul>
      </div>

      <div className="total-section">
        <h3>Total</h3>
        <div>
          <span className="total-price">{total}</span>
        </div>
      </div>
    </main>
  );
}
