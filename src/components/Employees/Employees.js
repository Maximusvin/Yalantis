import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AlphabetList,
  AlphabetItem,
  Title,
  SubTitle,
  InputLabel,
  UserItem,
} from './Employees.style';
import { fetchEmployees } from 'redux/employees/employeesOperations';
import { getEmployees } from 'redux/employees/employeesSelectors';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const Employees = () => {
  const employees = useSelector(getEmployees);
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
    <>
      <Title>Employees</Title>
      {employees.length > 0 && (
        <AlphabetList>
          {normalizeAlphabet.map((letter, index) => (
            <AlphabetItem key={index}>
              <SubTitle>{letter}</SubTitle>

              {sortEmployees(letter).length > 0 ? (
                <ul>
                  {sortEmployees(letter).map(
                    ({ id, firstName, lastName, dob }) => (
                      <UserItem key={id}>
                        {`${lastName} ${firstName}`}
                        <InputLabel>
                          <input type="radio" />
                          not active
                        </InputLabel>

                        <InputLabel>
                          <input type="radio" />
                          active
                        </InputLabel>
                      </UserItem>
                    ),
                  )}
                </ul>
              ) : (
                '-----'
              )}
            </AlphabetItem>
          ))}
        </AlphabetList>
      )}
    </>
  );
};

export default Employees;
