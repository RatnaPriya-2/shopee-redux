const ADD_TO_WISHLIST = "wishlist/add_item";
const REMOVE_FROM_WISHLIST = "wishlist/remove_item";

export const addToWishList = (product) => {
  return { type: ADD_TO_WISHLIST, payload: product };
};
export const removeFromWishList = (id) => {
  return { type: REMOVE_FROM_WISHLIST, payload: id };
};

const WishlistReducer = (state = [], action) => {
  if (action.type === ADD_TO_WISHLIST) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_FROM_WISHLIST) {
    return state.filter((product) => product.id !== action.payload);
  }

  return state;
};

export default WishlistReducer;
