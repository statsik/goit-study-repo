import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filterReducer from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'register'],  
      },
    }), 
});

const persistor = persistStore(store);

export { store, persistor };