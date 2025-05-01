import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

import { LuMoonStar } from "react-icons/lu";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../store/ModeReducer";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);
  const modeBoolean = useSelector((state) => state.mode);
  console.log(modeBoolean);

  const dispatch = useDispatch();
  return (
    <nav
      className={`${
        modeBoolean ? "navbar navbar-light" : "navbar navbar-dark"
      }`}
    >
      <div className="logo">
        <Link to="/">Shopee</Link>
      </div>
      <div className="nav-icons">
        <div className="mode-icon">
          {modeBoolean ? (
            <LuMoonStar onClick={() => dispatch(changeMode(!modeBoolean))} />
          ) : (
            <IoSunny onClick={() => dispatch(changeMode(!modeBoolean))} />
          )}
        </div>
        <div className="wishlist-icon">
          <Link to="/wishlist">
            <FaHeart className="icon" />
          </Link>
          <span className="wishlist-count">{wishlistItems.length}</span>
        </div>

        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart className="icon" />
          </Link>

          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
