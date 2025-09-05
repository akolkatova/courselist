import './LoginForm.css';
import { useState } from 'react';
// import { isValidEmail, isValidPassword } from '../utils';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

interface Props {
  onLogin: () => void,
}

export const LoginForm = ({onLogin}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state: AppState) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const sendLoginRequest = (email: string, password: string) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify([
        {
          id: Math.floor(Math.random() * password.length),
          name: 'Anna K',
          email: email,
        },
      ]),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(loginAction(json[0]));
      })
      .catch((err) => console.log('Failed to login' + err));
  };

  const handleLogin = () => {
    // const isEmailValid = isValidEmail(email);
    // const isPasswordValid = isValidPassword(password);

    sendLoginRequest(email, password);
    console.log('onLogin');
    onLogin();
    navigate('/');

    // if (!isEmailValid) {
    //   setErrorEmail('Invalid email');
    // } else setErrorPassword('');

    // if (!isPasswordValid) {
    //   setErrorPassword('Invalid password');
    // } else setErrorPassword('');

    // if (isEmailValid && isPasswordValid) {
    //   sendLoginRequest(email, password);
    //   onLogin();
    // }
  };

  const handlePasswordInput = (value: string) => {
    setErrorPassword('');
    setPassword(value);
  };

  const handleEmailInput = (value: string) => {
    setErrorEmail('');
    setEmail(value);
  };

  return (
    <>
      <form className="login-form">
        <input
          onChange={(e) => handleEmailInput(e.target.value)}
          value={email}
          className="lf--input"
          placeholder="Email"
          type="text"
        ></input>
        {errorEmail && <span className="lf--error">{errorEmail}</span>}
        <input
          onChange={(e) => handlePasswordInput(e.target.value)}
          value={password}
          className="lf--input"
          placeholder="Password"
          type="password"
        ></input>
        {errorPassword && <span className="lf--error">{errorPassword}</span>}
        <input onClick={handleLogin} className="action-button" type="button" value="LOGIN"></input>
        <a className="lf--forgot" href="#">
          Forgot password?
        </a>
      </form>
    </>
  );
};
