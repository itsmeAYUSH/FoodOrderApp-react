import { useContext } from "react";
import "../Cart/CartIcon";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCntx = useContext(CartContext);
  let quantity = 0;
  cartCntx.items.forEach(item => {
    quantity = quantity + Number(item.quantity);
  })
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCntx.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
