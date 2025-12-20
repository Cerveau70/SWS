import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TransportPage from './pages/TransportPage';
import DataPage from './pages/DataPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './pages/AdminLayout';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
        } />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminLayout />} />
      </Routes>
      {/* Footer only on home */}
      {/* show Footer only when at root path */}
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;