import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageService } from './providers/language.service';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { ThemeService } from './providers/theme.service';
import { AppInit } from './app.initializer';
import { SectionsModule } from './sections/sections.module';
import { FrontModule } from './components/main/front.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SectionsModule,
    FrontModule
  ],
  providers: [
    LanguageService,
    ThemeService,
    GoogleAnalyticsService,
    AppInit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
