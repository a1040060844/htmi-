import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { UserPlus, MessageSquare, Image, ArrowRight, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const { t, dir } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const steps = [
    {
      icon: UserPlus,
      title: t.contact.step1,
      desc: t.contact.step1Desc,
      isWeChat: true
    },
    {
      icon: MessageSquare,
      title: t.contact.step2,
      desc: t.contact.step2Desc,
      isWeChat: false
    },
    {
      icon: Image,
      title: t.contact.step3,
      desc: t.contact.step3Desc,
      isWeChat: false
    }
  ];

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText('JCSabonFactory');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-stone-100">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-stone-900"
            >
              {t.contact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 mt-6 max-w-2xl mx-auto text-lg"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative" dir={dir}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => step.isWeChat && setShowQR(true)}
                onMouseLeave={() => step.isWeChat && setShowQR(false)}
                className="flex flex-col items-center text-center group relative"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 relative cursor-pointer">
                  <step.icon className="w-7 h-7" />
                  
                  {/* Floating QR Code for WeChat Step */}
                  {step.isWeChat && (
                    <AnimatePresence>
                      {showQR && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: -10 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          className="absolute bottom-full mb-4 z-20 w-48 bg-white p-2 shadow-2xl border border-stone-100 rounded-lg pointer-events-none"
                        >
                          <img 
                            src="https://i.postimg.cc/2jh1BhMm/jing-qing-qi-dai.png" 
                            alt="WeChat QR Code" 
                            className="w-full h-auto rounded"
                          />
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-stone-100"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute ${dir === 'rtl' ? 'left-[-20%] rotate-180' : 'right-[-20%]'} top-8 opacity-10`}>
                    <ArrowRight size={48} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-20 flex flex-col items-center gap-8 border-t border-stone-50 pt-16"
          >
            <button 
              onClick={handleCopyWeChat}
              className={`px-12 py-5 uppercase tracking-widest text-xs transition-all duration-500 flex items-center gap-3 shadow-xl hover:shadow-2xl ${
                copied ? 'bg-green-600 text-white' : 'bg-stone-900 text-white hover:bg-stone-700'
              }`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? (dir === 'rtl' ? 'تم النسخ' : 'COPIED') : t.contact.downloadBtn}
            </button>
            
            <div className="text-center">
              <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-2">WeChat ID</p>
              <div 
                className="font-serif text-2xl md:text-3xl text-stone-900 border-b border-stone-200 pb-1 cursor-pointer hover:text-stone-600 transition-colors"
                onMouseEnter={() => setShowQR(true)}
                onMouseLeave={() => setShowQR(false)}
              >
                JCSabonFactory
              </div>
              <p className="text-stone-400 text-xs mt-4">
                {t.contact.emailUs}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};