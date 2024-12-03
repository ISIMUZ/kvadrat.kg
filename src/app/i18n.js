import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationKY from '../locales/ky.json'
import translationRU from '../locales/ru.json'

const resources = {
	ru: {
		translation: translationRU,
	},
	ky: {
		translation: translationKY,
	},
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
  	.init({
		resources,
		fallbackLng: 'ru', // Язык по умолчанию, если не найдено
		interpolation: {
			escapeValue: false, // React автоматически экранирует
		},
	})

export default i18n
