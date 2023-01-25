import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from './providers/language.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { ThemeService } from './providers/theme.service';
import { initializeApp } from './app.initializer';
import { IntroComponent } from './sections/intro/intro.component';
import { AboutComponent } from './sections/about/about.component';
import { ExpertInComponent } from './sections/expert-in/expert-in.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { AccomplishmentsComponent } from './sections/accomplishments/accomplishments.component';
import { EducationConferencesComponent } from './sections/education-conferences/education-conferences.component';
import { ContactComponent } from './sections/contact/contact.component';
import { BaBackTopComponent } from './components/babacktop/babacktop.component';
import { LangSelectComponent } from './components/langselect/langselect';
import { MenuComponent } from './components/menu/menu.component';
import { OutlineComponent } from './components/outline/outline';
import { ScrollSpyDirective } from './providers/scroll-spy-directive';
import { SpeedDialFabComponent } from './components/speeddial/speed-dial-fab.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    IntroComponent,
    AboutComponent,
    ExpertInComponent,
    AccomplishmentsComponent,
    ExperienceComponent,
    EducationConferencesComponent,
    ContactComponent,
    BaBackTopComponent,
    LangSelectComponent,
    MenuComponent,
    OutlineComponent,
    ScrollSpyDirective,
    SpeedDialFabComponent
  ],
  providers: [
    LanguageService,
    ThemeService,
    GoogleAnalyticsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ThemeService, Meta],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
