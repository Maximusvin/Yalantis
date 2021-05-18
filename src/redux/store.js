import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employeesReducer from './employees/employeesReducer';
import selectedEmployeesReducer from './selectedEmployees/selectedEmployeesReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
];

const activeUsersIdConfig = {
  key: 'activeUsersId',
  storage,
  blacklist: ['employees'],
};

const rootReducer = combineReducers({
  employees: employeesReducer,
  selectedEmployeesId: selectedEmployeesReducer,
});

const persistedReducer = persistReducer(activeUsersIdConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
