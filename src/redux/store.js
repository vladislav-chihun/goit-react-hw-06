import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contactValue',
  storage,
  whitelist:["items"]
}

const persistedContactReducer = persistReducer(persistConfig, contactReducer)
export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filters: filterReducer,
    },
});

export const persistor = persistStore(store)
