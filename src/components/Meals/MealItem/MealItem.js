import React, { useContext } from "react";
import CartContex from "../../../store/cart-contex";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform";
const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContex);
  const addItemHandler = (amount) => {
    cartCtx.addItem({ ...props.meal, amount: amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemform id={props.meal.id} addAmount={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
