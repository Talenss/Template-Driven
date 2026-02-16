import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Assuming you have app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
