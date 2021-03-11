import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  const { countCartItems } = props; //object destructuring
  return (
    <header className="row block center">
      <div>
        <a href="#">
          <h1>MYshop</h1>
        </a>
      </div>

      <div>
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
