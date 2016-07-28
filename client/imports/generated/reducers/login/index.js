import email from './email';
import name from './name';
import { combineReducers } from 'redux';
import custom from '../../../custom/index';
import helpers from '../../helpers';

const baseReducers = {
  email,
  name
};

const additionalReducers = helpers.getAdditional({
  type: 'reducers',
  path: 'login',
  baseFiles: [
    'email',
    'name',
  ],
  custom,
});

const reducers = Object.assign(baseReducers, additionalReducers);

const reducer = (_state, _action) => {
  switch (_action.type) {
    case 'LOGIN_INITIALIZE':
      return _action.value;
    default:
      return combineReducers(reducers)(_state, _action);
  }
}

const customize = custom['reducers/login/index'] || ((x) => x);

export default customize(reducer, reducers);
