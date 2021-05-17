import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import employeesReducer from './employees/employeesReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
];

export const store = configureStore({
  reducer: { employees: employeesReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
