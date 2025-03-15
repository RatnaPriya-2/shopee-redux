import { combineReducers, createStore } from "redux";
import ProductsReducer from "./ProductsReducer";
import WishlistReducer from "./WishlistReducer";
import CartReducer from "./CartReducer";
import modeReducer from "./ModeReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  wishlist: WishlistReducer,
  cart: CartReducer,
  mode: modeReducer,
});

const loadFromLocalStorage = () => {
  const savedItems = JSON.parse(localStorage.getItem("reducerItems")) || [];
  return savedItems;
};
const saveToLocalStorage = (state) => {
  localStorage.setItem("reducerItems", JSON.stringify(state));
};

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

console.log(store.getState());

export default store;
