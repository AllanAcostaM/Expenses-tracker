// polyfills.ts

// Polyfill para 'Integer'
if (!(window as any).Integer) {
  (window as any).Integer = Number;
}

// Luego, el resto de polyfills de Angular si son necesarios
import 'zone.js';
