import React from "react";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 22.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div className={classes["cart-item"]}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>39.62</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
