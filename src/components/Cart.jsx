// Cart.jsx
import React from "react";
import "../App.css"; // or use Cart.css if separated

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", margin: "20px" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="cart-header-row">
            <span>Product-image</span>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Action</span>
          </div>

          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}

          <div className="cart-grand-total">
            <h3>
              <span>Grand Total</span>: $ {cartTotal}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
