import { useState } from "react";
import "./index.css";
import "./App.css";

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
      inCart: 0,
      icon: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      inCart: 0,
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
      inCart: 0,
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
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/001-beetroot.svg"
                alt="beetroot"
              />
              <p>beetroot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">4</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/002-carrot.svg"
                alt="carrot"
              />
              <p>carrot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/003-apple.svg"
                alt="apple"
              />
              <p>apple</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/004-apricot.svg"
                alt="apricot"
              />
              <p>apricot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/009-blueberry.svg"
                alt="blueberry"
              />
              <p>blueberry</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/010-eggplant.svg"
                alt="eggplant"
              />
              <p>eggplant</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
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
