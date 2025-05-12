
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer.jsx';

import './App.css';

const App = () => (
    <Router>
       <div className="app-wrapper">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );

export default App;
