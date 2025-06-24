
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import Services from './pages/Services';
import ContentCohort from './pages/ContentCohort';
import BrandCatalyst from './pages/BrandCatalyst';
import Assessment from './pages/Assessment';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/content-cohort" element={<ContentCohort />} />
          <Route path="/services/brand-catalyst" element={<BrandCatalyst />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
