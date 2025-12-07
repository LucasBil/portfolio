import { createI18n } from 'vue-i18n'
import fr from './fr.json'
import en from './en.json'
import ch from './ch.json'

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en,
    ch
  }
})