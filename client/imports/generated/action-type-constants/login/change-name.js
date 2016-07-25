/* eslint-disable */
import custom from '../../../custom/index';

const customize = custom['login/change-name'] || ((x) => x);

const actionTypeConstant = 'LOGIN_CHANGE_NAME';

export default customize(actionTypeConstant);
