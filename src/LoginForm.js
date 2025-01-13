import React, { useState } from 'react';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = () => {
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    alert('Password reset successful!');
    setIsForgotPassword(false);
  };

  return (
    <div className="container">
      <div className="form-container">
        {!isForgotPassword && (
          <div className="form-toggle">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
        )}

        {isLogin && !isForgotPassword && (
          <form className="form">
            <h2>Login</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" onClick={() => setIsForgotPassword(true)}>
              Forgot Password?
            </a>
            <button type="submit">Login</button>
            <p>
              Not a member?{' '}
              <a href="#" onClick={() => setIsLogin(false)}>
                Signup Now
              </a>
            </p>
          </form>
        )}

        {!isLogin && !isForgotPassword && (
          <div className="form">
            <h2>Signup</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Signup</button>
          </div>
        )}

        {isForgotPassword && (
          <form className="form">
            <h2>Reset Password</h2>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="button" onClick={handleResetPassword}>
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}