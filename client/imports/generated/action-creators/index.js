/* eslint-disable */
import face from './face/index';
import index from './index/index';
import loading from './loading/index';
import login from './login/index';
import custom from '../../custom/index';
import helpers from '../helpers';

const baseActionCreators = {
  face,
  index,
  loading,
  login
};

const additionalActionCreators = helpers.getAdditional({
  type: 'action-creators',
  path: '',
  baseFiles: [
    'face',
    'index',
    'loading',
    'login',
  ],
  custom,
});

const actionCreators  = Object.assign(baseActionCreators, additionalActionCreators);

const customize = custom['action-creators/index'] || ((x) => x)

export default customize(actionCreators, actionCreators);
