import React from "react";
import { MdDelete } from "react-icons/md";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../store/CartReducer";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-list-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
      </div>
      <p className="cart-item-price">${item.price}</p>
      <div className="quantity-controls">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <p className="cart-item-total">${item.price * item.quantity}</p>
      <button
        className="delete-btn"
        onClick={() => dispatch(removeItemFromCart(item.id))}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
