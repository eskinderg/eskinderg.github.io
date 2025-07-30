import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ThemeModule } from './theme/theme.module';
import { LanguageModule } from './language/language.modue';
import { AppRoutingModule } from './app-routing.module';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { AppInit } from './app.initializer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoaderInterceptor } from './providers/loading.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule, ThemeModule, LanguageModule, AppRoutingModule),
        GoogleAnalyticsService,
        AppInit,
        provideHttpClient(withInterceptors([LoaderInterceptor])),
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideClientHydration(withEventReplay())
    ]
};
