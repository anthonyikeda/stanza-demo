/* eslint-disable */
import custom from '../../../custom/index';
import actionTypeConstants from '../../action-type-constants/index';

const actionCreator = function submitEmailForm(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.login.submitEmailForm,
    value: event.target.value,
  };
};

const customize = custom['action-creators/login/submit-email-form'] || ((x) => x);

export default customize(actionCreator, { actionTypeConstants });
