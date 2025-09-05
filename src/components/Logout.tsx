import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <input onClick={handleLogout} className="action-button" type="button" value="LOGOUT"></input>
    </>
  );
};
