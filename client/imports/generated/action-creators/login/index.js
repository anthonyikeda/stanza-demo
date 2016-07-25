/* eslint-disable */
import changeEmail from './change-email';
import changeName from './change-name';
import submitEmailForm from './submit-email-form';
import custom from '../../../custom/index';
import helpers from '../../helpers';

const baseActionCreators = {
  changeEmail,
  changeName,
  submitEmailForm
};

const additionalActionCreators = helpers.getAdditional({
  type: 'action-creators',
  path: 'login',
  baseFiles: [
    'changeEmail',
    'changeName',
    'submitEmailForm',
  ],
  custom,
});

const actionCreators  = Object.assign(baseActionCreators, additionalActionCreators);

const customize = custom['action-creators/login/index'] || ((x) => x)

export default customize(actionCreators, actionCreators);
