import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./Slice/productSlice";
import newsSlice from "./Slice/newsSlice";
import commentsSlice from "./Slice/commentsSlice";
import clientSlice from "./Slice/clientSlice";
import cartSlice from "./Slice/cartSlice";
import usevSlice from "./Slice/usevSlice";
export const store = configureStore({
  reducer:{
    product: productSlice,
    news: newsSlice,
    comments: commentsSlice,
    client: clientSlice,
    cart: cartSlice,
    usev: usevSlice,
  }

  // add more reducers here
});
