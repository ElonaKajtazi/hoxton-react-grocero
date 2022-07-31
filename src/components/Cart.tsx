import { StoreItemType } from "../App";

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
            <li>
              <img
                className="cart--item-icon"
                src={item.icon}
                alt={item.name}
              />
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
