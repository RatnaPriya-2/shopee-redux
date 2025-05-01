import { toast } from "react-toastify";

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
    if (state.some((product) => product.id === action.payload.id)) {
      toast.error("Item already added to wishlist");
      return [...state];
    } else {
      toast.success("Item added to wishlist");
      return [...state, action.payload];
    }
  }
  if (action.type === REMOVE_FROM_WISHLIST) {
    toast.success("Item removed from wishlist");
    return state.filter((product) => product.id !== action.payload);
  }

  return state;
};

export default WishlistReducer;
