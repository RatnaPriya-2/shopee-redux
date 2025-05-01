import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../store/WishlistReducer";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist ❤️</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch(removeFromWishList(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
