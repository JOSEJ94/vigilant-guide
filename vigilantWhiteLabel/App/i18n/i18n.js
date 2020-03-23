import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from './languages/es.json';
import enTranslations from './languages/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: enTranslations,
      es: esTranslations
    },
    lng: 'es',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
