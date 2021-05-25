import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemform = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
