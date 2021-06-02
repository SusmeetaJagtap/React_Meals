import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input} ref={ref}></input>
    </div>
  );
});

export default Input;
