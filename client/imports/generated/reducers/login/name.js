import custom from '../../../custom/index';
import actionTypeConstants from '../../action-type-constants/index';

const reducer = (state = '', action) => {
  switch (action.type) {
    case actionTypeConstants.login.changeName:
      return action.value;
    default:
      return state;
  }
}

const customize = custom['reducers/login/name'] || ((x) => x);

export default customize(reducer, { actionTypeConstants });
