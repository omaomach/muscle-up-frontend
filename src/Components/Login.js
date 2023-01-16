import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login-form-box'>
      <div className='title'>
        <h1 className='login-title'> Log In Here!</h1>
      </div>
      <div className='abt-form'>
        <form className='form'>

          <input
            placeholder='Username'
            type="text"

          />

          <input
            placeholder='Password'
            type="password"
          />
          <button className='login-btn' type="submit">Login</button>

        </form>
      </div>
      <div>
        <h3 className='abt-header'>Don't have an account?
        </h3>
      </div>
      <div>
      <Link to="/signup" className="signup-btn">Sign Up</Link>

      </div>
    </div>


  );
}


export default Login;