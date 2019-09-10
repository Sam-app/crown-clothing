import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directorReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directorReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
