import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login-form-box'>
      <h1 className='login-title'> Log In Here!</h1>

      <form className='form'>
        {/* <label htmlFor="text">Username:</label> */}

        <input
        placeholder='Username'
          type="text"

        />
        {/* <label htmlFor="password">Password:</label> */}

        <input
        placeholder='Password'
          type="password"
        />
        <button className='login-button' type="submit">Login</button>
  
      </form>
      <h3>Don't have an account?
                    <Link to="/signup" className="link">Sign Up</Link>
                </h3>
                </div>
   
   
  );
}


export default Login;