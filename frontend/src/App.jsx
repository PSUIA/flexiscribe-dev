import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login.jsx';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to fLexiScribe</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
