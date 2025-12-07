import { createI18n } from 'vue-i18n'
import fr from './fr.json'
import en from './en.json'
import ch from './ch.json'

const browserLocale = (navigator.language || 'en').split('-')[0]

export default createI18n({
  legacy: false,
  locale: browserLocale,
  fallbackLocale: 'en',
  messages: {
    fr,
    en,
    ch
  }
})