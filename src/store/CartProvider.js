import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item);
    // items.push(item);
    updateItems([...items,item]);
    console.log(cartContext);
  };
  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: items,
    // totalAmount : 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    message: "click here",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
