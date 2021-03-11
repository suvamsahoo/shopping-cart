import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

function App() {
  const { products } = data; //object destructuring
  const [cartItems, setCartItems] = useState([]);

  //ADD-:
  const onAdd = (product) => {
    console.log(product)
    console.log(cartItems)
    const exist = cartItems.find((obj) => obj.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((obj) =>
          obj.id === product.id ? { ...exist, qty: exist.qty + 1 } : obj
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //REMOVE-:
  const onRemove = (product) => {
    const exist = cartItems.find((obj) => obj.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((obj) => obj.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((obj) =>
          obj.id === product.id ? { ...exist, qty: exist.qty - 1 } : obj //else keep the product
        )
      );
    }
  }

  return (
    <>
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <div className="row">
          <Main products={products} onAdd={onAdd} />
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    </>
  );
}

export default App;
