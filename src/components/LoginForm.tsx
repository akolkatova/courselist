import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (!email.includes('@')) setError('Invalid email');
    else setError('');
  };
  return (
    <>
      <form className="login-form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="lf--input"
          placeholder="Email"
          type="text"
        ></input>
        {error && <p>{error}</p>}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="lf--input"
          placeholder="Password"
          type="password"
        ></input>

        <input onClick={handleSubmit} className="action-button" type="submit" value="LOGIN"></input>
        <a className="lf--forgot" href="#">Forgot password?</a>

        <input onClick={handleSubmit} className="action-button" type="submit" value="LOGOUT"></input>
      </form>
    </>
  );
};
