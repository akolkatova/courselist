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
    <div className="component-section">
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
};
