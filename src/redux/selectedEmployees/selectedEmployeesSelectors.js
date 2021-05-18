import { getAllEmployees } from 'redux/employees/employeesSelectors';

export const getActiveUsersId = state => state.selectedEmployeesId;

export const getSelectedEmployees = state => {
  const allUsers = getAllEmployees(state);
  const selectedUsersId = getActiveUsersId(state);
  const selectedUsers = allUsers.filter(item =>
    [item.id].every(e => selectedUsersId.includes(e)),
  );

  return selectedUsers;
};
