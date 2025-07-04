import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

import { provideAnalytics, getAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    // Conditionally add analytics providers only in browser
    ...(typeof window !== 'undefined'
      ? [
          provideAnalytics(() => getAnalytics()),
          ScreenTrackingService,
          provideFirestore(() => getFirestore()),
        ]
      : [])
  ]
})
  .catch((err) => console.error(err));
