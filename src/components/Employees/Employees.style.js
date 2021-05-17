import styled from 'styled-components';

export const Title = styled.h1`
  padding-top: 50px;
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

export const SubTitle = styled.h2`
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`;

export const UserItem = styled.li`
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  display: block;
  cursor: pointer;
  margin-bottom: 5px;
`;
