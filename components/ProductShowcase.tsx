import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const productImages = [
  'https://i.postimg.cc/3J2ChnN4/Generated-Image-December-13-2025-12-55PM.png', // Rice Soap
  'https://i.postimg.cc/MKtH1QFq/df3f2f6e-d1c9-41a2-8b37-15c78c0bddae.png', // Doctor Soap
  'https://i.postimg.cc/Wbpbp4by/a5b793e5-5409-43cd-8884-2ec8c6d47797.png', // Shampoo Soap
  'https://i.postimg.cc/c1cmVFzs/061f72d0-5fd6-43d9-abe6-d5720848b05d.png', // Snow Sensation
  'https://i.postimg.cc/brBrbXm3/5d1ab2aa-71cf-4e7d-8f37-19d9995b6fe0.png', // Pink Gold
  'https://i.postimg.cc/tR2XYHc2/8390cdef-b71c-4167-8982-6fa5cc55573a.png'  // Pineapple
];

interface ProductShowcaseProps {
  onViewAll: () => void;
  onSelectProduct: (id: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onViewAll, onSelectProduct }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-stone-500 uppercase tracking-widest text-xs">{t.products.subtitle}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-4">{t.products.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelectProduct(product.id)}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-stone-100">
                <img 
                  src={productImages[index]} 
                  alt={product.title} 
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <span className="text-stone-500 text-xs tracking-widest uppercase">{product.category}</span>
              <h3 className="font-serif text-2xl text-stone-900 mt-2 mb-3 group-hover:text-stone-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={onViewAll}
            className="inline-block border-b border-stone-900 pb-1 text-stone-900 uppercase tracking-widest text-xs hover:text-stone-500 hover:border-stone-500 transition-all"
          >
            {t.products.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};