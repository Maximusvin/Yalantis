import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesError,
} from './employeesActions';

const entities = createReducer([], {
  [fetchEmployeesSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchEmployeesRequest]: () => true,
  [fetchEmployeesSuccess]: () => false,
  [fetchEmployeesError]: () => false,
});

const error = createReducer(null, {
  [fetchEmployeesError]: (_, { payload }) => payload,
  [fetchEmployeesRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
