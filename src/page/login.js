import React from 'react';
import './style.css'

const Login = () => {
  return (

    <div className="wrapper">
      <fieldset>


        <legend align='left'>Sign in</legend>
        <form className="wrapper" action="#">
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
            <input type="submit" value="Sign in"/>
          </div>

          <div className="radioCheck">
            <input type="radio" className="radioNo" id="no" name="remember" value="no" checked/>
              <label for="no" className="no" >no</label>
              <input type="radio" className="radioYes" id="yes" name="remember" value="yes"/>
                <label for="yes" className="yes" >yes</label>
            <span className="switchSelection"></span>
            <span className="checkLabel">Remember me?</span>
          </div>

        </form>
      </fieldset>
      <div> <p className="forgotLabel"> Don't have an account?</p> </div>
      <div className="button"> Register</div>
    </div>


  );
};

export default Login;