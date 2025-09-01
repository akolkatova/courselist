import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!email.includes('@')) setError('Invalid email');
    else setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEmailInput = (value: string) => {
    setError('');
    setEmail(value);
  };

  return (
    <>
      {!isLoggedIn ? (
        <form className="login-form">
          <input
            onChange={(e) => handleEmailInput(e.target.value)}
            value={email}
            className="lf--input"
            placeholder="Email"
            type="text"
          ></input>
          {error && <span className="lf--error">{error}</span>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="lf--input"
            placeholder="Password"
            type="password"
          ></input>

          <input
            onClick={handleLogin}
            className="action-button"
            type="button"
            value="LOGIN"
          ></input>
          <a className="lf--forgot" href="#">
            Forgot password?
          </a>
        </form>
      ) : (
        <input
          onClick={handleLogout}
          className="action-button"
          type="button"
          value="LOGOUT"
        ></input>
      )}
    </>
  );
};
