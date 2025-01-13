import React, { useState } from 'react';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            Signup
          </button>
        </div>

        {isLogin && (
          <form className="form">
            <h2>Login</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password ?</a>
            <button type="submit">Login</button>
            <p>Not a member? <a href="#" onClick={()=> setIsLogin(false)}>Signup Now</a></p>
          </form>
        )}
        {!isLogin && (
          <div className="form">
            <h2>Signup</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            
          </div>
        )}
      </div>
    </div>
  );
}
