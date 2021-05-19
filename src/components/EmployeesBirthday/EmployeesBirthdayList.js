import PropTypes from 'prop-types';
import { UserList, UserItem } from './EmployeesBirthday.style';

const EmployeesBirthdayList = ({ employees, onGetDate }) => {
  return (
    <UserList>
      {employees.map(user => (
        <UserItem key={user.id}>
          {`${user.lastName} ${user.firstName}  - ${onGetDate(user.dob)}`}
        </UserItem>
      ))}
    </UserList>
  );
};

EmployeesBirthdayList.defaultProps = {
  employees: [],
};

EmployeesBirthdayList.propTypes = {
  employees: PropTypes.array.isRequired,
  onGetDate: PropTypes.func.isRequired,
};

export default EmployeesBirthdayList;
