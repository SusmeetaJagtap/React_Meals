import React from "react";
import CartContex from "./cart-contex";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};
  return (
    <CartContex.Provider
      value={{
        cartItems: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
