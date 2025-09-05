import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(false);
    console.log('isAuth:', isAuth);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container">
          <div className="layout">
            <Routes>
              <Route
                path="/"
                element={isAuth ? <Layout /> : <Navigate to="/login" replace />}
              />
              <Route path="/login" element={<LoginForm onLogin={() => handleAuth()}/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
