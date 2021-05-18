import { useSelector } from 'react-redux';
import {
  EmployeesBirthdayWrap,
  Title,
  TitleMonth,
} from './EmployeesBirthday.style';
import { getSelectedEmployees } from 'redux/selectedEmployees/selectedEmployeesSelectors';
import EmployeesBirthdayList from './EmployeesBirthdayList';

const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December ',
];

const EmployeesBirthday = () => {
  const selectedUsers = useSelector(getSelectedEmployees);
  const monthIdx = selectedUsers.map(user => new Date(user.dob).getMonth());
  const uniqueMonthIdx = [...new Set(monthIdx)].sort((a, b) => a - b);
  const currentMonth = new Date().getMonth();

  const uniqueMonthIdxByStartToCurrentMonth = [
    ...uniqueMonthIdx.splice(
      uniqueMonthIdx.findIndex(idx => idx >= currentMonth),
    ),
    ...uniqueMonthIdx,
  ];

  const getFormatData = data => {
    const fullData = new Date(data);
    const day = fullData.getDate();
    const month = monthsList[fullData.getMonth()];
    const year = fullData.getFullYear();

    return `${day} ${month}, ${year} year`;
  };

  const filterEmployeesByIdxMonth = idx =>
    [...selectedUsers].filter(user =>
      [new Date(user.dob).getMonth()].includes(idx),
    );

  const sortEmployees = idx =>
    filterEmployeesByIdxMonth(idx).sort((a, b) =>
      a.lastName.localeCompare(b.lastName),
    );

  return (
    <EmployeesBirthdayWrap>
      <Title>Employees birthday</Title>
      {selectedUsers.length > 0 ? (
        <>
          <ul>
            {uniqueMonthIdxByStartToCurrentMonth.map(monthIdx => (
              <li key={monthIdx}>
                <TitleMonth>{monthsList[monthIdx]}</TitleMonth>
                <EmployeesBirthdayList
                  employees={sortEmployees(monthIdx)}
                  onGetDate={getFormatData}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3>Employees List is empty</h3>
      )}
    </EmployeesBirthdayWrap>
  );
};

export default EmployeesBirthday;
