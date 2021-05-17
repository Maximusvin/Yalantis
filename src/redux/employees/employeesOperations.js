import fetchAPI from 'services/apiUsers';
import {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesError,
} from './employeesActions';

export const fetchEmployees = () => async dispatch => {
  dispatch(fetchEmployeesRequest());

  try {
    const employees = await fetchAPI();
    dispatch(fetchEmployeesSuccess(employees));
  } catch (error) {
    dispatch(fetchEmployeesError(error));
  }
};
