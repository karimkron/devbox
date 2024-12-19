import { en } from './languages/en';
import { es } from './languages/es';
import { fr } from './languages/fr';

export const defaultLanguage = 'en';

export const availableLanguages = [
  { code: 'en', name: 'US', flag: '🇺🇸' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
] as const;

export const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
};