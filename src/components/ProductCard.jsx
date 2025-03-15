import React from "react";
import { useDispatch } from "react-redux";
import { addToWishList } from "../store/WishlistReducer";
import { addItemToCart } from "../store/CartReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <div className="main-details">
          <h3>{product.title}</h3>
          <span>$ {product.price}</span>
          <p>Rating:{product.rating.rate}</p>
        </div>
        <div className="buttons">
          <button className="add-cart-btn" onClick = {()=>dispatch(addItemToCart(product))}>Add to cart</button>
          <button
            className="add-wishlist-btn"
            onClick={() => dispatch(addToWishList(product))}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
