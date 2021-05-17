import { createAction } from '@reduxjs/toolkit';

export const fetchEmployeesRequest = createAction(
  'employees/fetchEmployeesRequest',
);

export const fetchEmployeesSuccess = createAction(
  'employees/fetchEmployeesSuccess',
);

export const fetchEmployeesError = createAction(
  'employees/fetchEmployeesError',
);
