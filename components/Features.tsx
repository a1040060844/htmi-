import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t.features.speed.title,
      description: t.features.speed.desc
    },
    {
      icon: Globe,
      title: t.features.global.title,
      description: t.features.global.desc
    },
    {
      icon: Award,
      title: t.features.heritage.title,
      description: t.features.heritage.desc
    },
    {
      icon: ShieldCheck,
      title: t.features.quality.title,
      description: t.features.quality.desc
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 inline-block p-4 border border-stone-200 rounded-full group-hover:border-stone-400 transition-colors">
                <feature.icon className="w-6 h-6 text-stone-600" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};