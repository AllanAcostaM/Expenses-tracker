// app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

// Importaciones de AngularFire
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';


// Importa tu configuración de Firebase desde los entornos
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Inicializa Firebase con la configuración de tu entorno
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // // Configura Firestore
    // provideFirestore(() => getFirestore()),
    // Agrega la inicialización de AngularFire en versión compat para proveer el token requerido
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase))
  ],
};
