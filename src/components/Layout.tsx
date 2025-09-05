import { useSelector } from 'react-redux';
import { AppState } from '../types';
import { Logout } from './Logout';
import { CourseList } from './CourseList';

export const Layout = () => {
    const user = useSelector((state: AppState) => state.user);
  return (
    <>
      <p>Hello, {user?.name}</p>
      <Logout />
      <CourseList />
    </>
  );
};