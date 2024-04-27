import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { ThemeService } from './app/services/theme-service/theme-service.service';

const loadTheme = (themeService: ThemeService): (() => Promise<any>) => {
  return () =>
    new Promise((resolve, reject) => {
      resolve(themeService.applyTheme());
    });
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: loadTheme,
      deps: [ThemeService],
      multi: true,
    }, provideClientHydration()
  ],
}).catch((err) => console.error(err));
