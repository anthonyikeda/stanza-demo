import custom from '../../../custom/index';
import actionTypeConstants from '../../action-type-constants/index';

const actionCreator = function changeEmail(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.login.changeEmail,
    value: event.target.value,
  };
};

const customize = custom['action-creators/login/change-email'] || ((x) => x);

export default customize(actionCreator, { actionTypeConstants });
