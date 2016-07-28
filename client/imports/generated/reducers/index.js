import face from './face/index';
import index from './index/index';
import loading from './loading/index';
import login from './login/index';
import { combineReducers } from 'redux';
import custom from '../../custom/index';
import helpers from '../helpers';

const baseReducers = {
  face,
  index,
  loading,
  login
};

const additionalReducers = helpers.getAdditional({
  type: 'reducers',
  path: '',
  baseFiles: [
    'face',
    'index',
    'loading',
    'login',
  ],
  custom,
});

const reducers = Object.assign(baseReducers, additionalReducers);

const reducer = (_state, _action) => {
  switch (_action.type) {
    case 'REDUCERS_INITIALIZE':
      return _action.value;
    default:
      return combineReducers(reducers)(_state, _action);
  }
}

const customize = custom['reducers/index'] || ((x) => x);

export default customize(reducer, reducers);
