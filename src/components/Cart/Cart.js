import React, { useContext } from "react";
import CartContex from "../../store/cart-contex";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const cartItems = (
    <ul>
      {cartCtx.cartItems.map((item) => (
        <li key={item.id}>
          {item.name} {item.amount}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal className={classes["cart-item"]} onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>39.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
