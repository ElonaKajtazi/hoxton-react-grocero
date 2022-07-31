import { StoreItemType } from "../App";
import { StoreItem } from "./StoreItem";

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
          <StoreItem item={item} increaseItemQuantity={increaseItemQuantity} />
        ))}
      </ul>
    </header>
  );
}
