import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { GoogleAnalyticsService } from './app/providers/google-analytics.service';
import { AppInit } from './app/app.initializer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoaderInterceptor } from './app/providers/loading.interceptor';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ThemeModule } from './app/theme/theme.module';
import { LanguageModule } from './app/language/language.modue';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ThemeModule, LanguageModule, AppRoutingModule),
        GoogleAnalyticsService,
        AppInit,
        provideHttpClient(withInterceptors([LoaderInterceptor])),
        provideAnimations()
    ]
}).catch((err) => console.error(err));
