import { configureStore } from "@reduxjs/toolkit";
import activeIndex from "./slices/activeSlice";

export const store = configureStore({
  reducer: {
    activeIndex,
  },
});
