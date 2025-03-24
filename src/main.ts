import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'zone.js'; // Esto ya se maneja en polyfills, pero normalmente no es necesario duplicarlo

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
