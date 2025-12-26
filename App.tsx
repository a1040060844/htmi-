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
import { ProductDetail } from './components/ProductDetail';
import { GeishaDeepDive } from './components/GeishaDeepDive';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    if (currentPage === 'home' && scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setScrollTarget(null);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setScrollTarget(null);
      }
    }
  }, [currentPage, scrollTarget]);

  const navigate = (page: string, targetSection?: string, productId?: string) => {
    if (page === 'home' && targetSection) {
      setScrollTarget(targetSection);
    }
    
    if (productId) {
      setSelectedProductId(productId);
    } else if (page !== 'product-detail' && page !== 'geisha-deep-dive') {
      setSelectedProductId(null);
    }

    setCurrentPage(page);
    
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <ProductShowcase 
              onViewAll={() => navigate('products')} 
              onSelectProduct={(id) => navigate('product-detail', undefined, id)}
            />
            <Services />
            <Partners />
            <Contact />
          </>
        );
      case 'products':
        return (
          <AllProducts 
            onSelectProduct={(id) => navigate('product-detail', undefined, id)} 
          />
        );
      case 'product-detail':
        return (
          <ProductDetail 
            productId={selectedProductId} 
            onBack={() => navigate('products')} 
            onInquiry={() => navigate('home', 'contact')}
            onDeepDive={() => navigate('geisha-deep-dive')}
          />
        );
      case 'geisha-deep-dive':
        return (
          <GeishaDeepDive 
            onBack={() => navigate('product-detail', undefined, 'geisha-soap')} 
          />
        );
      default:
        return <Hero />;
    }
  };

  const showNavAndFooter = currentPage !== 'geisha-deep-dive';

  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden selection:bg-stone-200 selection:text-stone-900">
      {showNavAndFooter && <Navbar currentPage={currentPage} onNavigate={navigate} />}
      {renderPage()}
      {showNavAndFooter && <Footer />}
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