import styled from 'styled-components';

export const EmployeesPageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const EmployeesWrap = styled.div`
  width: 65%;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;

export const AlphabetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 35px;

  /* @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
  } */
`;

export const AlphabetItem = styled.li``;

export const SubTitle = styled.h3`
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`;
