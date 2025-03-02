import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/landingpage.jsx';
import Phones from './phones/phones1.jsx';
import GeneralTechnology from './generaltech/general-technology.jsx';
import Phones2 from './phones/phones2.jsx';
import Phones3 from './phones/phones3.jsx';
import Internet from './internet/internet1.jsx';
import Internet2 from './internet/internet2.jsx';
import Internet3 from './internet/internet3.jsx';
import Cybersecurity from './cybersecurity/cybersecurity1.jsx';
import Cybersecurity2 from './cybersecurity/cybersecurity2.jsx';
import Cybersecurity3 from './cybersecurity/cybersecurity3.jsx';
import Cybersecurity4 from './cybersecurity/cybersecurity4.jsx';
import Backup from './backup-disaster/backup1.jsx';
import Backup2 from './backup-disaster/backup2.jsx';

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
        <Route path="/internet2" element={<Internet2 />} />
        <Route path="/internet3" element={<Internet3 />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/cybersecurity2" element={<Cybersecurity2 />} />
        <Route path="/cybersecurity3" element={<Cybersecurity3 />} />
        <Route path="/cybersecurity4" element={<Cybersecurity4 />} />
        <Route path="/backup" element={<Backup />} />
        <Route path="/backup2" element={<Backup2 />} />

      </Routes>
    </Router>
  );
}

export default App;
