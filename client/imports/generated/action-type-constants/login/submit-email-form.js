/* eslint-disable */
import custom from '../../../custom/index';

const customize = custom['login/submit-email-form'] || ((x) => x);

const actionTypeConstant = 'LOGIN_SUBMIT_EMAIL_FORM';

export default customize(actionTypeConstant);
