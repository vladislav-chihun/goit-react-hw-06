import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

export const initialFilterState = initialState.filters

export const updateFilter = createAction("filter/update");

export const filterReducer = createReducer(initialFilterState, (builder) => {
    builder.addCase(updateFilter, (state, action) => {
        state.name = action.payload;
    });
});
