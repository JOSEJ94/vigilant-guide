import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        login: {
          email: 'Email',
          password: 'Password',
          attemptLogin: 'Log in',
          needAccount: 'Create an account',
          needHelp: 'Need help?'
        }
      },
      es: {
        login: {
          email: 'Correo electrónico',
          password: 'Contraseña',
          attemptLogin: 'Iniciar Sesión',
          needAccount: 'Crear cuenta',
          needHelp: 'Necesitas ayuda?'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
