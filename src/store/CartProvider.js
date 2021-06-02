import React, { useReducer } from "react";
import CartContex from "./cart-contex";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "REMOVE":
    default:
      return state;
  }
};
const cartInitialState = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
  const [cartState, cartDispatchAction] = useReducer(
    cartReducer,
    cartInitialState
  );
  const addItemToCart = (item) => {
    cartDispatchAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    cartDispatchAction({ type: "REMOVE", id: id });
  };
  return (
    <CartContex.Provider
      value={{
        cartItems: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
