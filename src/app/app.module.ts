import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { ThemeService } from './providers/theme.service';
import { SectionsModule } from './sections/sections.module';
import { FrontModule } from './components/main/front.module';
import { AppInit } from './app.initializer';
import { LanguageModule } from './language/language.modue';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThemeModule,
    LanguageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SectionsModule,
    FrontModule
  ],
  providers: [ThemeService, GoogleAnalyticsService, AppInit],
  bootstrap: [AppComponent]
})
export class AppModule {}
