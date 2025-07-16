import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';         // Your URL shortener form
import StatsPage from './StatsPage';       // Import the stats page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />            {/* Default route */}
        <Route path="/stats" element={<StatsPage />} />      {/* Stats page route */}
      </Routes>
    </Router>
  );
}

export default App;


