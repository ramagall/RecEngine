import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/landingpage.jsx';
import Phones from './phones/phones1.jsx';
import GeneralTechnology from './generaltech/general-technology.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/general-tech" element={<GeneralTechnology />} />
        <Route path="/phones" element={<Phones />} />
      </Routes>
    </Router>
  );
}

export default App;
