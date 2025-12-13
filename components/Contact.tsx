import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-stone-100">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">{t.contact.title}</h2>
            <p className="text-stone-500 mt-4">
              {t.contact.subtitle}
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{t.contact.name}</label>
                <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent" placeholder="" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{t.contact.company}</label>
                <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent" placeholder="" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{t.contact.email}</label>
                <input type="email" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent" placeholder="" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{t.contact.market}</label>
                <select className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent text-stone-700">
                  <option>{t.contact.regions.me}</option>
                  <option>{t.contact.regions.la}</option>
                  <option>{t.contact.regions.eu}</option>
                  <option>{t.contact.regions.na}</option>
                  <option>{t.contact.regions.ap}</option>
                  <option>{t.contact.regions.af}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{t.contact.details}</label>
              <textarea rows={4} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent resize-none" placeholder={t.contact.detailsPlaceholder}></textarea>
            </div>

            <div className="text-center pt-6">
              <button className="px-10 py-4 bg-stone-900 text-white uppercase tracking-widest text-xs hover:bg-stone-700 transition-colors duration-300">
                {t.contact.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};