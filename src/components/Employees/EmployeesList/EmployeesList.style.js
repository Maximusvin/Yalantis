import styled from 'styled-components';

export const UserItem = styled.li`
  padding: 5px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid
    ${props => (props.activeClass ? '#000' : 'transparent')};
  transition: all 0.2s linear;
  background-color: ${props => (props.activeClass ? 'rgb(219, 219, 219)' : '')};

  &:hover {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    background-color: rgb(219, 219, 219);
  }
`;

export const User = styled.h4`
  margin-bottom: 3px;
  color: ${props => (props.activeClass ? 'blue' : '')};
`;
