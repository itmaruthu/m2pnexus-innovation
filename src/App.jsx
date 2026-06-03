import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Connect from './pages/Connect';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Layout>
    </Router>
  );
}
