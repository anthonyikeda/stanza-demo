/* eslint-disable */
import face from './face/index';
import index from './index/index';
import loading from './loading/index';
import login from './login/index';
import custom from '../../custom/index';
import helpers from '../helpers';

const baseActionTypeConstants = {
  face,
  index,
  loading,
  login
};

const additionalActionTypeConstants = helpers.getAdditional({
  type: 'action-type-constants',
  path: '',
  baseFiles: [
    'face',
    'index',
    'loading',
    'login',
  ],
  custom,
});

const actionTypeConstants  = Object.assign(baseActionTypeConstants, additionalActionTypeConstants);

const customize = custom['action-type-constants/index'] || ((x) => x)

export default customize(actionTypeConstants, actionTypeConstants);
