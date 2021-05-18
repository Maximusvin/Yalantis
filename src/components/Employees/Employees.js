import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EmployeesList, EmployeesBirthday } from 'components';
import {
  EmployeesPageWrap,
  EmployeesWrap,
  AlphabetList,
  AlphabetItem,
  Title,
  SubTitle,
} from './Employees.style';
import { fetchEmployees } from 'redux/employees/employeesOperations';
import { getAllEmployees } from 'redux/employees/employeesSelectors';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Employees = () => {
  const employees = useSelector(getAllEmployees);
  const dispatch = useDispatch();

  const normalizeAlphabet = alphabet.toUpperCase().split('');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const filterEmployeesByLetter = letter => {
    return [...employees].filter(employee =>
      employee.lastName[0].toUpperCase().includes(letter),
    );
  };

  const sortEmployees = letter =>
    filterEmployeesByLetter(letter).sort((a, b) =>
      a.lastName.localeCompare(b.lastName),
    );

  return (
    <EmployeesPageWrap>
      <EmployeesWrap>
        <Title>Employees</Title>
        {employees.length > 0 && (
          <AlphabetList>
            {normalizeAlphabet.map((letter, index) => (
              <AlphabetItem key={index}>
                <SubTitle>{letter}</SubTitle>

                {sortEmployees(letter).length > 0 ? (
                  <EmployeesList employees={sortEmployees(letter)} />
                ) : (
                  '-----'
                )}
              </AlphabetItem>
            ))}
          </AlphabetList>
        )}
      </EmployeesWrap>

      <EmployeesBirthday />
    </EmployeesPageWrap>
  );
};

export default Employees;
