import React from 'react';
import { LoginForm } from './components/LoginForm';
import { CourseList } from './components/CourseList';

function App() {
  return (
    <>
      <h1>Courses Libruary</h1>
      <LoginForm></LoginForm>
      <CourseList></CourseList>
    </>
  );
}

export default App;
