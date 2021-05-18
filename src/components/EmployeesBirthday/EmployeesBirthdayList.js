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

export default EmployeesBirthdayList;
