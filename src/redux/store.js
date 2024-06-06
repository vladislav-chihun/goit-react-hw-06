import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedContactReducer = persistReducer(persistConfig, contactReducer)

const persistConfig = {
  key: 'contactValue',
  storage,
}

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filters: filterReducer,
    },
});
