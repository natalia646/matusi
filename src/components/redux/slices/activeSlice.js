import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
  details: false,
};

const activeSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setDetails(state, action) {
      state.details = action.payload;
    }
  },
});
export const selectIndex = (state) => state.index;

export const { setActiveIndex, setDetails} = activeSlice.actions;

export default activeSlice.reducer;
