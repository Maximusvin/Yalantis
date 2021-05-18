import { useSelector } from 'react-redux';
import { RadioControls } from 'components';
import { UserItem, User } from './EmployeesList.style';
import { getActiveUsersId } from 'redux/selectedEmployees/selectedEmployeesSelectors';

const EmployeesItem = ({ id, firstName, lastName }) => {
  const isActiveUser = useSelector(getActiveUsersId).includes(id);

  return (
    <UserItem>
      <User activeClass={isActiveUser}>{`${lastName} ${firstName}`}</User>
      <RadioControls id={id} />
    </UserItem>
  );
};

const EmployeesList = ({ employees }) => {
  return (
    <ul>
      {employees.map(user => (
        <EmployeesItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default EmployeesList;
