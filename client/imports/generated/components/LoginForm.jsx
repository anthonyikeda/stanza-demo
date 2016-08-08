import React from 'react';
import custom from '../../custom/index';

class LoginForm extends React.Component {
  render() {
    return (
      <form data-name='Email Form' id='email-form' name='email-form'>
        <label htmlFor='name'>
          NAME
        </label>
        <input data-name='Name'
          id='name'
          name='name'
          placeholder='Enter your name'
          type='text'
          className='w-input'
          maxLength='256' />
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
          maxLength='256' />
        <input data-wait='Please wait...'
          type='submit'
          value='Submit'
          className='w-button button' />
      </form>
      );
  }
}
;

const customize = custom['components/LoginForm'] || ((x) => x);
const LoginFormWithCustom = customize(LoginForm);

export default LoginFormWithCustom;
