import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';
import custom from '../../custom/index';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className='form-background'>
          <div className='w-form form'>
            <form data-name='Email Form'
              id='email-form'
              name='email-form'
              onSubmit={this.props['action.login.submitEmailForm']}>
              <label htmlFor='name'>
                NAME
              </label>
              <input data-name='Name'
                id='name'
                name='name'
                placeholder='Enter your name'
                type='text'
                className='w-input'
                maxLength='256'
                value={this.props['state.login.name']}
                onChange={this.props['action.login.changeName']} />
              <label htmlFor='email'>
                EMAIL
              </label>
              <input data-name='Email'
                id='email'
                name='email'
                placeholder='Enter your email address'
                required='required'
                type='email'
                className='w-input'
                maxLength='256'
                value={this.props['state.login.email']}
                onChange={this.props['action.login.changeEmail']} />
              <input data-wait='Please wait...'
                type='submit'
                value='Submit'
                className='w-button button' />
            </form>
            <div className='w-form-done'>
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className='w-form-fail'>
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
;

const LoginWithRedux = reduxConnect(
  (state) => ({
    'state.login.name': state.login.name,
    'state.login.email': state.login.email
  }),
  {
    'action.login.submitEmailForm': action.login.submitEmailForm,
    'action.login.changeName': action.login.changeName,
    'action.login.changeEmail': action.login.changeEmail
  }
)(Login);

const customize = custom['components/Login'] || ((x) => x);
const LoginWithReduxWithCustom = customize(LoginWithRedux);

export default LoginWithReduxWithCustom;
