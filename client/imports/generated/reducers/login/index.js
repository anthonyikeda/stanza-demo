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

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_INITIALIZE':
      return action.value;
    default:
      return combineReducers(reducers)(state, action);
  }
}

const customize = custom['reducers/login/index'] || ((x) => x);

export default customize(reducer, reducers);
