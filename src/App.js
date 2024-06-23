import './App.css';
import HomePage from './components/landing/home';
import AuthPage from './components/login/authPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
