import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, ChevronRight, Sparkles, Droplets, Info, ExternalLink } from 'lucide-react';

interface ProductDetailProps {
  productId: string | null;
  onBack: () => void;
  onInquiry: () => void;
  onDeepDive?: () => void;
}

const productImages: Record<string, string> = {
  'rice-milk': 'https://i.postimg.cc/3J2ChnN4/Generated-Image-December-13-2025-12-55PM.png',
  'doctor-soap': 'https://i.postimg.cc/MKtH1QFq/df3f2f6e-d1c9-41a2-8b37-15c78c0bddae.png',
  'usma-shampoo': 'https://i.postimg.cc/Wbpbp4by/a5b793e5-5409-43cd-8884-2ec8c6d47797.png',
  'snow-lotus': 'https://i.postimg.cc/c1cmVFzs/061f72d0-5fd6-43d9-abe6-d5720848b05d.png',
  'pink-gold': 'https://i.postimg.cc/brBrbXm3/5d1ab2aa-71cf-4e7d-8f37-19d9995b6fe0.png',
  'aha-pineapple': 'https://i.postimg.cc/tR2XYHc2/8390cdef-b71c-4167-8982-6fa5cc55573a.png',
  'geisha-soap': 'https://i.postimg.cc/yd1k5ZwH/7ff8a2a6-dfd5-4a83-8164-09d763ce1ce8.png'
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack, onInquiry, onDeepDive }) => {
  const { t, dir, language } = useLanguage();
  
  const product = t.products.items.find(item => item.id === productId);
  const image = productId ? productImages[productId] : '';

  if (!product) return null;

  const handleDeepDiveClick = (e: React.MouseEvent) => {
    if (productId === 'geisha-soap' && onDeepDive) {
      e.preventDefault();
      onDeepDive();
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white" dir={dir}>
      <div className="container mx-auto px-6">
        {/* Breadcrumb / Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-12 group"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
          <span className="text-xs uppercase tracking-widest font-bold">{t.products.back}</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-stone-50 overflow-hidden shadow-2xl"
          >
            <img 
              src={image} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
               <span className="bg-white/80 backdrop-blur px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 border border-stone-200 shadow-sm">
                 {product.category}
               </span>
            </div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6 leading-tight">
              {product.title}
            </h1>
            
            <p className="text-lg text-stone-600 font-light leading-relaxed mb-10 border-l-4 border-stone-100 pl-6 italic">
              {product.details?.fullDesc}
            </p>

            {/* Product Specific Detail Image (Arborvitae / usma-shampoo) */}
            {productId === 'usma-shampoo' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-10 rounded-lg overflow-hidden border border-stone-100"
              >
                <img 
                  src="https://i.postimg.cc/0yKDmV4R/ce-bai-ye3.png" 
                  alt="Detailed Ingredient View" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}

            {/* Benefits List */}
            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.products.detailsTitle}
              </h3>
              <ul className="space-y-4">
                {product.details?.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-stone-700">
                    <ChevronRight className="w-5 h-5 text-stone-300 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collapsible-style info sections (Luxury Feel) */}
            <div className="space-y-8 border-t border-stone-100 pt-10">
               <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-stone-400" />
                    {t.products.ingredientsTitle}
                  </h4>
                  <p className="text-stone-500 text-sm leading-loose">
                    {product.details?.ingredients}
                  </p>
               </div>

               <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Info className="w-3.5 h-3.5 text-stone-400" />
                    {t.products.usageTitle}
                  </h4>
                  <p className="text-stone-500 text-sm leading-loose">
                    {product.details?.usage}
                  </p>
               </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={onInquiry}
                 className="px-10 py-5 bg-stone-900 text-white uppercase tracking-widest text-xs font-bold hover:bg-stone-700 transition-all flex items-center justify-center gap-3 shadow-xl flex-1"
               >
                 {t.products.inquiry}
               </button>

               <a 
                 href={productId === 'geisha-soap' ? '#' : "https://www.jingjingcosmetics.xyz"} 
                 target={productId === 'geisha-soap' ? '_self' : "_blank"}
                 rel="noopener noreferrer"
                 onClick={handleDeepDiveClick}
                 className="px-10 py-5 border border-stone-900 text-stone-900 uppercase tracking-widest text-xs font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-3 flex-1"
               >
                 {language === 'zh' ? '详细介绍' : language === 'ar' ? 'مقدمة مفصلة' : 'Detailed Introduction'}
                 <ExternalLink size={14} />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};