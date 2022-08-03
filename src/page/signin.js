import React from 'react';
import './style.css'

const Signin = () => {
  return (

    <div className="wrapper">
      <fieldset>


        <legend align='left'>Log in</legend>
        <form className="wrapper" action="#">
          <div>
            <p className="buttonTitle">Name:</p>
            <label className="user" htmlFor="text"> </label>
            <input className="user-input" type="text" name="name" id="name" placeholder="name"/>
          </div>
          <div>
            <p className="buttonTitle">Email:</p>
            <label className="user" htmlFor="text"> </label>
            <input className="user-input" type="text" name="name" id="name" placeholder="email@example.com"/>
          </div>
          <div>
            <p className="buttonTitle">Password:</p>
            <label className="lock" htmlFor="password"> </label>
            <input type="password" name="name" id="name" placeholder="password"/>
          </div>
          <div>
            <input type="submitLog" value="Log in"/>
          </div>
        </form>
      </fieldset>
      <div><p className="forgotLabel">Do you have an account?</p>
        <div className="button"> Sign In</div>
      </div>
    </div>


  );
};

export default Signin;