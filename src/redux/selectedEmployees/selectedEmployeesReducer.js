import { createReducer } from '@reduxjs/toolkit';
import { AddEmployeesId, DeleteEmployeesId } from './selectedEmployeesActions';

const selectedEmployees = createReducer([], {
  [AddEmployeesId]: (state, { payload }) => [...state, payload],
  [DeleteEmployeesId]: (state, { payload }) => [
    ...state.filter(id => id !== payload),
  ],
});

export default selectedEmployees;
