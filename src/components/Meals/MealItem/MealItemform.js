import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemform = (props) => {
  const amountInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const itemAmount = amountInputRef.current.value;
    const itemAmountNumber = +itemAmount;
    if (itemAmountNumber < 1 || itemAmountNumber > 5) {
      return;
    }
    props.addAmount(itemAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          id: "amount" + props.id,
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemform;
