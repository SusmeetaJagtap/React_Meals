import React from "react";
import foodimage from "../../assets/food.jpg";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodimage} alt="Delicious food"></img>
      </div>
    </>
  );
};

export default Header;
