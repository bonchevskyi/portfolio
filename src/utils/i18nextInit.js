import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../assets/translations/en.json';
import translationPL from '../assets/translations/pl.json';
import translationUA from '../assets/translations/ua.json';

const availableLanguages = ['en', 'pl', 'ua'];

const resourcesLang = {
    en: {
        translation: translationEN,
    },
    pl: {
        translation: translationPL,
    },
    ua: {
        translation: translationUA,
    },
};

export default i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resourcesLang,
        fallbackLng: 'en',

        debug: false,

        load: 'languageOnly',

        whitelist: availableLanguages,

        detection: {
            checkWhitelist: true,
        },

        cache: {
            enabled: true,
        },

        interpolation: {
            escapeValue: false,
        },
    });
