import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { RadioControls } from 'components';
import { UserItem, User } from './EmployeesList.style';
import { getActiveUsersId } from 'redux/selectedEmployees/selectedEmployeesSelectors';

const EmployeesItem = ({ id, firstName, lastName }) => {
  const isActiveUser = useSelector(getActiveUsersId).includes(id);

  return (
    <UserItem activeClass={isActiveUser}>
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

EmployeesList.defaultProps = {
  employees: [],
};

EmployeesItem.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
};

EmployeesList.propTypes = {
  employees: PropTypes.array.isRequired,
};

EmployeesItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default EmployeesList;
