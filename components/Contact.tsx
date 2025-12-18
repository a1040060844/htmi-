import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, FileEdit, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const { t, dir } = useLanguage();

  const steps = [
    {
      icon: Download,
      title: t.contact.step1,
      desc: t.contact.step1Desc,
    },
    {
      icon: FileEdit,
      title: t.contact.step2,
      desc: t.contact.step2Desc,
    },
    {
      icon: Mail,
      title: t.contact.step3,
      desc: t.contact.step3Desc,
    }
  ];

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
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                  <step.icon className="w-7 h-7" />
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
            <a 
              href="#" 
              className="px-12 py-5 bg-stone-900 text-white uppercase tracking-widest text-xs hover:bg-stone-700 transition-all duration-500 flex items-center gap-3 shadow-xl hover:shadow-2xl"
              onClick={(e) => e.preventDefault()}
            >
              <Download size={16} />
              {t.contact.downloadBtn}
            </a>
            
            <div className="text-center">
              <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-2">{t.contact.step3}</p>
              <a 
                href="mailto:business@jcsabon.com" 
                className="font-serif text-2xl md:text-3xl text-stone-900 hover:text-stone-500 transition-colors border-b border-stone-200 pb-1"
              >
                business@jcsabon.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};