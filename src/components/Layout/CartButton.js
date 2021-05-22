import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
