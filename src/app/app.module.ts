import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './sections/about/about.module';
import { IntroModule } from './sections/intro/intro.module';
import { LanguageService } from './providers/language.service';
import { HttpClientModule } from '@angular/common/http';
import { ExpertInModule } from './sections/expert-in/expert-in.module';
import { MatDividerModule } from '@angular/material/divider';
import { AccomplishmentsModule } from './sections/accomplishments/accomplishments.module';
import { ExperienceModule } from './sections/experience/experience.module';
import { EducationConferencesModule } from './sections/education-conferences/education-conferences.module';
import { ContactModule } from './sections/contact/contact.module';
import { MenuModule } from './components/menu/menu.module';
import { BaBackTopModule } from './components/babacktop/babacktop.module';
import { SpeedDialFabModule } from './components/speeddial/speed-dial-fab.module';
import { OutlineModule } from './components/outline/outline.module';
import { LangSelectModule } from './components/langselect/langselect.module';
import { GoogleAnalyticsService } from './providers/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AboutModule,
    IntroModule,
    ExpertInModule,
    MatDividerModule,
    AccomplishmentsModule,
    ExperienceModule,
    EducationConferencesModule,
    ContactModule,
    MenuModule,
    BaBackTopModule,
    SpeedDialFabModule,
    OutlineModule,
    LangSelectModule
  ],
  providers: [LanguageService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
