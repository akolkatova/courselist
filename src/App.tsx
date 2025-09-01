import React from 'react';
import { LoginForm } from './components/LoginForm';
import { CourseList } from './components/CourseList';
import { VideoModal } from './components/VideoModal';

function App() {
  return (
    <>
      <h1>Courses Libruary</h1>
      <main className="container">
        <div className="layout">
          <aside className="sideBar">
            <LoginForm></LoginForm>
          </aside>
          <section>
            <CourseList></CourseList>
          </section>
        </div>
      </main>
      <VideoModal></VideoModal>
    </>
  );
}

export default App;
