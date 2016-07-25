/* eslint-disable */
import changeEmail from './change-email';
import changeName from './change-name';
import submitEmailForm from './submit-email-form';
import custom from '../../../custom/index';
import helpers from '../../helpers';

const baseActionTypeConstants = {
  changeEmail,
  changeName,
  submitEmailForm
};

const additionalActionTypeConstants = helpers.getAdditional({
  type: 'action-type-constants',
  path: 'login',
  baseFiles: [
    'changeEmail',
    'changeName',
    'submitEmailForm',
  ],
  custom,
});

const actionTypeConstants  = Object.assign(baseActionTypeConstants, additionalActionTypeConstants);

const customize = custom['action-type-constants/login/index'] || ((x) => x)

export default customize(actionTypeConstants, actionTypeConstants);
