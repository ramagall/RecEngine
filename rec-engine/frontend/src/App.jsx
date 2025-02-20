import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/landingpage.jsx';
import Phones from './phones/phones1.jsx';
import GeneralTechnology from './generaltech/general-technology.jsx';
import Phones2 from './phones/phones2.jsx';
import Phones3 from './phones/phones3.jsx';
import Internet from './internet/internet1.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/general-tech" element={<GeneralTechnology />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones2" element={<Phones2 />} />
        <Route path="/phones3" element={<Phones3 />} />
        <Route path="/internet" element={<Internet />} />
      </Routes>
    </Router>
  );
}

export default App;
