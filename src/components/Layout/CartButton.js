import React, { useContext } from "react";
import CartContex from "../../store/cart-contex";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const cartctx = useContext(CartContex);
  const itemsInCart = cartctx.cartItems.reduce((amt, item) => {
    return amt + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
