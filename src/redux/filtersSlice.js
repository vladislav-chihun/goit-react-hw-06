import {createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const sliceFilter = createSlice({
    name: "filters",
    initialState: initialState.filters,
    reducers: {
        updateFilter(state, action) {
              state.name = action.payload;
        }
    }
})

export const { updateFilter } = sliceFilter.actions;
export default sliceFilter.reducer;




