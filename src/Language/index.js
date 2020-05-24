import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import moment from 'moment';
import localization from 'moment/locale/es';

import translationEng from "./en/config.json";
import translationEsp from "./es/config.json";


moment.locale('es', localization);

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "es",
        fallbackLng: "es", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },

        resources: {
            en: {
                translations: translationEng
            },
            es: {
                translations: translationEsp
            }
        },
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",
    });

export default i18n;