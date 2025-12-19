import React, { useState, useEffect } from 'react';
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
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    // If we have a scroll target and we've just landed on the home page, scroll to it
    if (currentPage === 'home' && scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        // Short delay to ensure the DOM is painted
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setScrollTarget(null);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // If element not found, clear target
        setScrollTarget(null);
      }
    }
  }, [currentPage, scrollTarget]);

  const navigate = (page: string, targetSection?: string) => {
    if (page === 'home' && targetSection) {
      setScrollTarget(targetSection);
    }
    
    setCurrentPage(page);
    
    // Only scroll to top if we don't have a specific section target
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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