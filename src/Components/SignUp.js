import React from 'react'
import { Link } from 'react-router-dom';
 function SignUp() {
  return (
    <div className='signup-form-box'>
    <h1 className='signup-title'>New Users Sign Up Here!</h1>
    <form >
    
      {/* <label htmlFor="username">Username:</label> */}
      <input
      placeholder='Username'
        type="text"
        id="username"
      
      />
      <input
      placeholder='Email'
        type="email"
        id="email"
      
      />
         <input
      placeholder='Phone Number'
        type="number"
        id="phone_number"
      
      />
      
    
      <input
      placeholder='Password'
        type="password"
        id="password"
       
      />
      <input
      placeholder='Confirm Password'
        type="password"
        id="password_confirmation"

      />
      <button className="signup-button" type="submit">Sign Up</button>
    </form>
    <h3>Aleady have an account?
                <Link to="/login" className="login-button">Log In</Link>
            </h3>
    </div>
  );
}

export default SignUp;