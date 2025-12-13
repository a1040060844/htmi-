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
  const { t, language } = useLanguage();

  const featuredImages = [
    'https://i.postimg.cc/3J2ChnN4/Generated-Image-December-13-2025-12-55PM.png', // Rice Soap
    'https://i.postimg.cc/MKtH1QFq/df3f2f6e-d1c9-41a2-8b37-15c78c0bddae.png', // Doctor Soap
    'https://i.postimg.cc/Wbpbp4by/a5b793e5-5409-43cd-8884-2ec8c6d47797.png' // Shampoo Soap
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
      title: language === 'zh' ? "雪感焕白皂" : "Snow Sensation Whitening Soap",
      image: "https://i.postimg.cc/c1cmVFzs/061f72d0-5fd6-43d9-abe6-d5720848b05d.png"
    },
    {
      category: language === 'zh' ? "美白护肤" : "Skin Whitening",
      title: language === 'zh' ? "粉金焕白皂" : "Pink Gold Whitening Soap",
      image: "https://i.postimg.cc/brBrbXm3/5d1ab2aa-71cf-4e7d-8f37-19d9995b6fe0.png"
    },
    {
      category: language === 'zh' ? "果酸焕肤" : "AHA Brightening",
      title: language === 'zh' ? "AHA菠萝皂" : "AHA Pineapple Soap",
      image: "https://i.postimg.cc/tR2XYHc2/8390cdef-b71c-4167-8982-6fa5cc55573a.png"
    },
    {
      category: "Beauty",
      title: "Oud & Amber Luxury Bar",
      image: "https://images.unsplash.com/photo-1607006412353-3b10b7596d34?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Beauty",
      title: "Rose Petal Essence",
      image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Skincare",
      title: "Sulfur Treatment Soap",
      image: "https://images.unsplash.com/photo-1546552723-5e92be9794ba?q=80&w=2787&auto=format&fit=crop"
    },
    {
      category: "Skincare",
      title: "Salicylic Acne Bar",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Skincare",
      title: "Goat Milk Moisturizing",
      image: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=2525&auto=format&fit=crop"
    },
    {
      category: "Household",
      title: "Eco-Laundry Cube",
      image: "https://images.unsplash.com/photo-1628163750074-f3a14b53361e?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Household",
      title: "Stain Remover Bar",
      image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Hotel",
      title: "Mini Guest Soaps",
      image: "https://images.unsplash.com/photo-1612455648873-18c7c934c95f?q=80&w=2670&auto=format&fit=crop"
    },
    {
      category: "Novelty",
      title: "Fruit Shaped Series",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  const allProducts = [...featuredProducts, ...otherProducts];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-6">
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
    </div>
  );
};