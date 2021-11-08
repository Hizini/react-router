
   
import i18n from 'i18next'
import { initReactI18next } from "react-i18next"

import LanguagesEn from './resources/resources.en.json'
import LanguagesKo from './resources/resources.ko.json'
import LanguagesJa from './resources/resources.jp.json'
import LanguagesTh from './resources/resources.th.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: LanguagesKo },
      en: { translation: LanguagesEn },
      jp: { translation: LanguagesJa },
      th: { translation: LanguagesTh },
    },
    fallbackLng: "en", // 번역이 안될 때 영어로 출력
    debug: false,

    keySeparator: false,
    parseMissingKeyHandler: () => '',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n