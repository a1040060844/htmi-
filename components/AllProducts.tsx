import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductItem {
  category: string;
  title: string;
  image: string;
  link?: string;
}

export const AllProducts: React.FC = () => {
  const { t, language, dir } = useLanguage();

  const featuredImages = [
    'https://i.postimg.cc/3J2ChnN4/Generated-Image-December-13-2025-12-55PM.png', // Rice Soap
    'https://i.postimg.cc/MKtH1QFq/df3f2f6e-d1c9-41a2-8b37-15c78c0bddae.png', // Doctor Soap
    'https://i.postimg.cc/Wbpbp4by/a5b793e5-5409-43cd-8884-2ec8c6d47797.png', // Shampoo Soap
    'https://i.postimg.cc/c1cmVFzs/061f72d0-5fd6-43d9-abe6-d5720848b05d.png', // Snow Sensation
    'https://i.postimg.cc/brBrbXm3/5d1ab2aa-71cf-4e7d-8f37-19d9995b6fe0.png', // Pink Gold
    'https://i.postimg.cc/tR2XYHc2/8390cdef-b71c-4167-8982-6fa5cc55573a.png'  // Pineapple
  ];

  // Map the featured products from translations to match the list format
  // Index 2 is the Usma & Arborvitae Bar
  const featuredProducts: ProductItem[] = t.products.items.map((item, index) => ({
    category: item.category,
    title: item.title,
    image: featuredImages[index],
    link: index === 2 ? 'https://www.jingjingcosmetics.xyz/' : undefined
  }));

  // Expanded dummy product list
  const otherProducts: ProductItem[] = [
    {
      category: language === 'zh' ? "美白护肤" : "Skin Whitening",
      title: language === 'zh' ? "艺伎瓷肌皂" : "Geisha Porcelain Skin Soap",
      image: "https://i.postimg.cc/yd1k5ZwH/7ff8a2a6-dfd5-4a83-8164-09d763ce1ce8.png"
    }
  ];

  const allProducts = [...featuredProducts, ...otherProducts];

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
          {allProducts.map((product, idx) => {
            const CardContent = (
              <>
                <div className="aspect-square bg-stone-100 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">{product.category}</span>
                <h3 className="font-serif text-xl text-stone-900 mt-2">{product.title}</h3>
              </>
            );

            if (product.link) {
              return (
                <motion.a
                  key={idx}
                  href={product.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow block cursor-pointer"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* AI Disclaimer at the absolute bottom-left, touching the footer */}
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