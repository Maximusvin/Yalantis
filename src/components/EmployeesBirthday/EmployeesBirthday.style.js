import styled from 'styled-components';

export const EmployeesBirthdayWrap = styled.div`
  width: 30%;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;

export const TitleMonth = styled.h3`
  margin-bottom: 10px;
`;

export const UserList = styled.ul`
  margin-bottom: 20px;
`;

export const UserItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 5px;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 10px;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;
