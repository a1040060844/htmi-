import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AllProducts } from './components/AllProducts';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden selection:bg-stone-200 selection:text-stone-900">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Features />
          <ProductShowcase onViewAll={() => navigate('products')} />
          <Services />
          <Partners />
          <Contact />
        </>
      ) : (
        <AllProducts />
      )}
      
      <Footer />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;