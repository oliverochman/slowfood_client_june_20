import React from 'react';

const LoginForm = (props) => {
  let toggleRegistrationElement = props.registration ? 'Do you already have an account' : 'Sign up!'
  return (
    <>
      <form onSubmit={props.authenticate} id='login-form'>
        <label>Email</label>
        <input name='email' type='email' id='email' />
        <label>Password</label>
        <input name='password' type='password' id='password' />
        {
          props.registration && (
            <>
              <label>Password confirmation</label>
              <input name='passwordConfirmation' type='password' id='passwordConfirmation' />
            </>
          )
        }

        <button id='submit'>Submit</button>
      </form>

      <button onClick={props.toggleRegistration}>{toggleRegistrationElement}</button>
    </>
  )
}

export default LoginForm