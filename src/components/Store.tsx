import { StoreItemType } from "../App";

type Props = {
  store: StoreItemType[];
  increaseItemQuantity: (item: StoreItemType) => void;
};
export function Store({ store, increaseItemQuantity }: Props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {store.map((item) => (
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
        ))}
      </ul>
    </header>
  );
}
