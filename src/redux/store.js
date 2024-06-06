import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, initialState } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filters: filterReducer,
    }
})
