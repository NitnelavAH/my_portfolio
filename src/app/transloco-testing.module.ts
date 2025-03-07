import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, es },
    translocoConfig: {
      availableLangs: [
        { id: "en", label: "english" },
        { id: "es", label: "spanish" },
      ],
      defaultLang: 'es',
    },
    preloadLangs: true,
    ...options,
  });
}