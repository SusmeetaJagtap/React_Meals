import React, { useReducer } from "react";
import CartContex from "./cart-contex";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const cartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let existingCartItem = state.items[cartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        let updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[cartItemIndex] = updatedCartItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

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
