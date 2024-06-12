import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Submit from './components/Submit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;
