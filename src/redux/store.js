import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, initialState } from "./contactsSlice";


export const store = configureStore({
    reducer: {
        contacts:contactReducer,
    }
})
