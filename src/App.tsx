import { useState } from "react";
import "./index.css";
import "./App.css";
import { Store } from "./components/Store";
import { Cart } from "./components/Cart";
// Instructions
// Using the original JS version of Grocero as a reference, create a React version of it that works in exactly the same way.

// Tips if you're converting your old code
// - Start a new React TS project ✅
// - Run your original Grocero app ✅
// - Open it in the browser ✅
// - Copy its HTML, put it all in App.js, fix the JSX, and copy the styles ✅
// - Break the app down into its components ✅
// - Create state and pass props down as needed to make this app work just like it did in the JS version ✅
// - Again, no need to reinvent the wheel: if you have logic and data that you can just copy over from the original exercise and save you time - do it. Just be sure you understand all the code you copy over! ✅
export type StoreItemType = {
  id: number;
  name: string;
  price: number;
  inCart: number;
  icon: string;
};
export type StoreType = StoreItemType[];
function App() {
  //What items are available to buy?
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      inCart: 3,
      icon: "assets/icons/001-beetroot.svg",
    },
    {
      id: 2,
      name: "carrot",
      price: 0.3,
      inCart: 2,
      icon: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      inCart: 1,
      icon: "assets/icons/003-apple.svg",
    },
    {
      id: 4,
      name: "apricot",
      price: 0.2,
      inCart: 0,
      icon: "assets/icons/004-apricot.svg",
    },
    {
      id: 5,
      name: "avocado",
      price: 0.85,
      inCart: 0,
      icon: "assets/icons/005-avocado.svg",
    },
    {
      id: 6,
      name: "banana",
      price: 0.55,
      inCart: 2,
      icon: "assets/icons/006-bananas.svg",
    },
    {
      id: 7,
      name: "bell pepper",
      price: 0.45,
      inCart: 8,
      icon: "assets/icons/007-bell-pepper.svg",
    },
    {
      id: 8,
      name: "berry",
      price: 0.4,
      inCart: 0,
      icon: "assets/icons/008-berry.svg",
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      inCart: 0,
      icon: "assets/icons/009-blueberry.svg",
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.3,
      inCart: 0,
      icon: "assets/icons/010-eggplant.svg",
    },
  ]);
  //What items are in the cart?
  function getInCart() {
    return store.filter((item) => item.inCart > 0);
  }
  const cart = getInCart();

  function getTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.inCart;
    }
    return `£${total.toFixed(2)}`;
  }
  const total = getTotal();

  function increaseItemQuantity(item: StoreItemType) {
    const storeCopy: StoreType = structuredClone(store);

    const match = storeCopy.find((target) => target.id === item.id)!;
    match.inCart++;

    setStore(storeCopy);
  }
  function decreaseItemQuantity(item: any) {
    const storeCopy: StoreType = structuredClone(store);

    const match = storeCopy.find((target) => target.id === item.id)!;
    match.inCart--;

    setStore(storeCopy);
  }
  return (
    <div className="App">
      <Store store={store} increaseItemQuantity={increaseItemQuantity} />

      <Cart
        cart={cart}
        decreaseItemQuantity={decreaseItemQuantity}
        increaseItemQuantity={increaseItemQuantity}
        total={total}
      />
    </div>
  );
}

export default App;
