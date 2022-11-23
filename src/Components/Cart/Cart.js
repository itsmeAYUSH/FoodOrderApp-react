import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
// import CartContext from "../../store/cart-context";
import CartCntx from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartcntx = useContext(CartCntx);
  const cartItems = (
    <ul>
      {cartcntx.items.map((item) => (
        <li>
          Name: {item.name} price :{item.price} quantity : {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
