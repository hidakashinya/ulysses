import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComplexCover from './pages/ComplexCover';
import TattooCover from './pages/TattooCover';
import BodyJewelry from './pages/BodyJewelry';
import AngelMakeup from './pages/AngelMakeup';
import School from './pages/School';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complex-cover" element={<ComplexCover />} />
            <Route path="/tattoo-cover" element={<TattooCover />} />
            <Route path="/body-jewelry" element={<BodyJewelry />} />
            <Route path="/angel-makeup" element={<AngelMakeup />} />
            <Route path="/school" element={<School />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;