/* eslint-disable */
import custom from '../../../custom/index';

const customize = custom['login/change-email'] || ((x) => x);

const actionTypeConstant = 'LOGIN_CHANGE_EMAIL';

export default customize(actionTypeConstant);
