import React from 'react';
import { FlaskConical, PencilRuler, Factory, Ship } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FlaskConical,
      title: t.services.steps.formulation.title,
      desc: t.services.steps.formulation.desc
    },
    {
      icon: PencilRuler,
      title: t.services.steps.design.title,
      desc: t.services.steps.design.desc
    },
    {
      icon: Factory,
      title: t.services.steps.production.title,
      desc: t.services.steps.production.desc
    },
    {
      icon: Ship,
      title: t.services.steps.logistics.title,
      desc: t.services.steps.logistics.desc
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">{t.services.title}</h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-stone-400 font-light leading-relaxed">
              {t.services.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="border-t border-stone-700 pt-8">
              <step.icon className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="font-serif text-xl mb-2">{step.title}</h3>
              <p className="text-stone-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};