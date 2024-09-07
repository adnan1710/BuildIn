import './App.css';
import React, { useState } from 'react';
import HomePage from './components/landing/home';
import AuthPage from './components/login/authPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Profile from './components/landing/profile';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLogout = () => {
    setLoginStatus(false);
    if (window.location.pathname !== "/") {
      window.location.assign("/");
    }
  }
  const handleLogin = () => {
    setLoginStatus(true);
    console.log("Login successful",  window.location.pathname);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage loginStatus={loginStatus} handleLogout={handleLogout} handleLogin={handleLogin}/>} />
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </Router>
    // <Profile />
  );
}

export default App;
