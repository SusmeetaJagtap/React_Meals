import React from "react";
import Modal from "../UI/Modal";
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
    <Modal className={classes["cart-item"]}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>39.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
