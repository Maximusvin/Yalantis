import { useSelector, useDispatch } from 'react-redux';
import {
  AddEmployeesId,
  DeleteEmployeesId,
} from 'redux/selectedEmployees/selectedEmployeesActions';
import {
  RadioControlsWrap,
  InputLabel,
  RadioButton,
} from './RadioControls.style';
import { getActiveUsersId } from 'redux/selectedEmployees/selectedEmployeesSelectors';

const RadioControls = ({ id }) => {
  const isActive = useSelector(getActiveUsersId).includes(id);
  const dispatch = useDispatch();

  const handleChange = event => {
    const isCheckedInput = event.target.value === 'true' ? true : false;
    isCheckedInput
      ? dispatch(AddEmployeesId(id))
      : dispatch(DeleteEmployeesId(id));
  };

  return (
    <RadioControlsWrap>
      <InputLabel>
        <RadioButton
          type="radio"
          value="false"
          checked={!isActive}
          onChange={handleChange}
        />
        not active
      </InputLabel>

      <InputLabel>
        <RadioButton
          type="radio"
          value="true"
          checked={isActive}
          onChange={handleChange}
        />
        active
      </InputLabel>
    </RadioControlsWrap>
  );
};

export default RadioControls;
