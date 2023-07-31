import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categorySlice } from "./services/category";
export const store = configureStore({
  reducer: {
    [categorySlice.reducerPath]: categorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categorySlice.middleware),
});
setupListeners(store.dispatch);
