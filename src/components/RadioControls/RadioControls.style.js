import styled from 'styled-components';

export const RadioControlsWrap = styled.div`
  padding-left: 15px;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  width: max-content;
  transition: color 0.2s linear;
  color: ${props => (props.active ? 'blue' : '')};
  font-weight: ${props => (props.active ? 600 : 400)};

  &:hover {
    color: blue;
  }
`;

export const RadioButton = styled.input`
  cursor: pointer;
  margin-right: 3px;
`;
