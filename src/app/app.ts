import { Component, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Output } from '@angular/core';
import { Shared } from './providers/shared';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { SpeedDialFabPosition } from './components/speeddial/speed-dial-fab.component';
import { LanguageService } from './providers/language.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public activeSection: string;
  public speedDialFabButtons;
  public selectedTheme: string;
  public selectedLang: string;

  public spieTags = [
    'APP-SECTION-VIDEO',
    'APP-SECTION-ABOUT',
    'APP-SECTION-EXPERTIN',
    'APP-SECTION-ACCOMPLISHMENTS',
    'APP-SECTION-EXPERIENCE',
    'APP-SECTION-EDUCATION-CONFERENCES',
    'APP-SECTION-CONTACT'
  ];

  SpeedDialFabPosition          = SpeedDialFabPosition;
  speedDialFabPosition          = SpeedDialFabPosition.Top;
  speedDialFabColumnDirection   = 'column';
  speedDialFabPositionClassName = 'speed-dial-container-top';

  constructor(
    public portfolio: Shared,
    public ref: ChangeDetectorRef,
    public language: LanguageService,
    public meta: Meta
  ) {
    this.meta.addTags([
      {name: 'og:title', content: 'Eskinder | Profile'},
      {name: 'og:description', content: 'Hello, my name is Eskinder Gezahagne. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge and experience in order to develop professional web applications.'},
      {name: 'og:image', content: '/assets/img/social-min.png'},
      {name: 'author', content: 'Eskinder'},
      {name: 'keywords', content: 'Angular, Web, Frontend, Developer, Portfolio, Eskinder, Gezahagne, Getahun'},
      {name: 'description', content: 'Hello, my name is Eskinder Gezahagne. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. I combine my knowledge and experience in order to develop professional web applications.'}
    ]);
  }

  ngOnInit() {

    this.selectedTheme = localStorage.getItem('theme');
    this.selectedLang  = localStorage.getItem('language');

    if (!this.portfolio.texts) {
      this.portfolio.getTexts(this.selectedLang).subscribe(
        data => {
          this.portfolio.texts = data;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }

    if (!this.portfolio.colors) {
      this.portfolio.getColorList().subscribe (
        data => {
          this.portfolio.colors = data["colors"]
          this.speedDialFabButtons = this.portfolio.colors;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }
  }

  btn_click(lang:string) {
    this.portfolio.getTexts(lang).subscribe(
      data => {
        this.portfolio.texts = data;
        this.ref.detectChanges();
      },
      err => console.error(err)
    );
  }

  onSpeedDialFabClicked(btn: {icon: string, theme: string}) {
    this.selectedTheme = btn.theme;
    localStorage.setItem('theme',btn.theme);
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
