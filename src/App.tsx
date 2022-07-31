import { useState } from "react";
import "./index.css";
import "./App.css";
// Instructions
// Using the original JS version of Grocero as a reference, create a React version of it that works in exactly the same way.

// Tips if you're converting your old code
// - Start a new React TS project ✅
// - Run your original Grocero app ✅
// - Open it in the browser ✅
// - Copy its HTML, put it all in App.js, fix the JSX, and copy the styles ✅
// - Break the app down into its components
// - Create state and pass props down as needed to make this app work just like it did in the JS version
// - Again, no need to reinvent the wheel: if you have logic and data that you can just copy over from the original exercise and save you time - do it. Just be sure you understand all the code you copy over!

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
      inCart: 0,
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
  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {store.map((item) => (
            <li>
              <div className="store--item-icon">
                <img src={item.icon} />
              </div>
              <button>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>

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
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">{item.inCart}</span>
                <button className="quantity-btn add-btn center">+</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-section">
          <h3>Total</h3>
          <div>
            £<span class="total-price">2.80</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
