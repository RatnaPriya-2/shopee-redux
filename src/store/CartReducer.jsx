const ADD_TO_CART = "cart/addItem";
const REMOVE_FROM_CART = "cart/removeItem";
const INCREASE_QUANTITY = "cart/increaseQuantity";
const DECREASE_QUANTITY = "cart/decreaseQuantity";

export const addItemToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
export const removeItemFromCart = (id) => {
  return { type: REMOVE_FROM_CART, payload: id };
};
export const increaseQuantity = (id) => {
  return { type: INCREASE_QUANTITY, payload: id };
};
export const decreaseQuantity = (id) => {
  return { type: DECREASE_QUANTITY, payload: id };
};

const CartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART) {
    let findItem = state.find((item) => item.id === action.payload.id);
    if (findItem) {
      return state.map((item) =>
        item.id === findItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...state, { ...action.payload, quantity: 1 }];
  }
  if (action.type === REMOVE_FROM_CART) {
    return state.filter((item) => item.id !== action.payload);
  }
  if (action.type === INCREASE_QUANTITY) {
    return state.map((item) =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  if (action.type === DECREASE_QUANTITY) {
    return state.map((item) =>
      item.id === action.payload
        ? {
            ...item,
            quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
          }
        : item
    );
  }
  return state;
};

export default CartReducer;
