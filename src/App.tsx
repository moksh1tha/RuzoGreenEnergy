import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Verdex from './pages/Verdex';
import Technology from './pages/Technology';
import Sustainability from './pages/Sustainability';
import Investors from './pages/Investors';
import Careers from './pages/Careers';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verdex" element={<Verdex />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;