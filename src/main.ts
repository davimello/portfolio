import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { ThemeService } from './app/services/theme-service/theme-service.service';

const loadTheme = (themeService: ThemeService): (() => Promise<any>) => {
  return () =>
    new Promise((resolve, reject) => {
      resolve(themeService.applyTheme());
    });
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: loadTheme,
      deps: [ThemeService],
      multi: true,
    }, provideClientHydration(),
  ],
}).catch((err) => console.error(err));
