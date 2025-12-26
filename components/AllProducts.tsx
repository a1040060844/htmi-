import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductItem {
  id: string;
  category: string;
  title: string;
  image: string;
  link?: string;
}

interface AllProductsProps {
  onSelectProduct: (id: string) => void;
}

export const AllProducts: React.FC<AllProductsProps> = ({ onSelectProduct }) => {
  const { t, language, dir } = useLanguage();

  const productImages: Record<string, string> = {
    'rice-milk': 'https://i.postimg.cc/3J2ChnN4/Generated-Image-December-13-2025-12-55PM.png',
    'doctor-soap': 'https://i.postimg.cc/MKtH1QFq/df3f2f6e-d1c9-41a2-8b37-15c78c0bddae.png',
    'usma-shampoo': 'https://i.postimg.cc/Wbpbp4by/a5b793e5-5409-43cd-8884-2ec8c6d47797.png',
    'snow-lotus': 'https://i.postimg.cc/c1cmVFzs/061f72d0-5fd6-43d9-abe6-d5720848b05d.png',
    'pink-gold': 'https://i.postimg.cc/brBrbXm3/5d1ab2aa-71cf-4e7d-8f37-19d9995b6fe0.png',
    'aha-pineapple': 'https://i.postimg.cc/tR2XYHc2/8390cdef-b71c-4167-8982-6fa5cc55573a.png',
    'geisha-soap': 'https://i.postimg.cc/yd1k5ZwH/7ff8a2a6-dfd5-4a83-8164-09d763ce1ce8.png'
  };

  // Map the products from translations to match the list format with correct images
  const allProducts: ProductItem[] = t.products.items.map((item) => ({
    id: item.id,
    category: item.category,
    title: item.title,
    image: productImages[item.id] || 'https://via.placeholder.com/400'
  }));

  return (
    <div className="pt-32 pb-4 min-h-screen bg-stone-50 flex flex-col">
      <div className="container mx-auto px-6 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">{t.products.title} - {t.products.viewAll}</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Explore our extensive range of formulations. From luxury beauty bars to effective household solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => onSelectProduct(product.id)}
            >
              <div className="aspect-square bg-stone-100 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">{product.category}</span>
              <h3 className="font-serif text-xl text-stone-900 mt-2 group-hover:text-stone-600 transition-colors">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="container mx-auto px-6 mt-12 pb-2 text-start"
        dir={dir}
      >
        <p className="text-[7px] md:text-[8px] text-stone-200 font-light tracking-tighter opacity-70">
          * {t.products.aiDisclaimer}
        </p>
      </motion.div>
    </div>
  );
};