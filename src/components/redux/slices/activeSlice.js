import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeIndex: 0
}

const activeSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        setActiveIndex(state, action){
            state.activeIndex = action.payload
        }
    }
})

export const {setActiveIndex} = activeSlice.actions;

export default activeSlice.reducer