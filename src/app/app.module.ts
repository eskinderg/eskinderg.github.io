import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { SectionsModule } from './sections/sections.module';
import { FrontModule } from './components/main/front.module';
import { AppInit } from './app.initializer';
import { LanguageModule } from './language/language.modue';
import { ThemeModule } from './theme/theme.module';
import { LoaderInterceptor } from './providers/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ThemeModule,
        LanguageModule,
        AppRoutingModule,
        SectionsModule,
        FrontModule
    ],
    providers: [GoogleAnalyticsService, AppInit, provideHttpClient(withInterceptors([LoaderInterceptor]))]
})
export class AppModule {}
