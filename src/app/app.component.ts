import { ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from './providers/language.service';
import { SpeedDialFabPosition } from './components/speeddial/speed-dial-fab.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeSection: string;
  public speedDialFabButtons: any;
  public selectedTheme: string;
  public selectedLang: string;

  SpeedDialFabPosition = SpeedDialFabPosition;
  speedDialFabPosition = SpeedDialFabPosition.Top;
  speedDialFabColumnDirection = 'column';
  speedDialFabPositionClassName = 'speed-dial-container-top';

  public spieTags = [
    'APP-INTRO',
    'APP-ABOUT',
    'APP-EXPERT-IN',
    'APP-ACCOMPLISHMENTS',
    'APP-EXPERIENCE',
    'APP-EDUCATION-CONFERENCES',
    'APP-CONTACT'
  ];

  constructor(public languageService: LanguageService, public ref: ChangeDetectorRef, public meta: Meta) {

    this.selectedTheme = localStorage.getItem("theme");
    this.selectedLang = localStorage.getItem('language');

    this.meta.addTags([
      { name: 'og:title', content: 'Eskinder | Profile' },
      { name: 'og:description', content: 'Hi, my name is Eskinder Getahun. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge and experience in order to develop professional web applications.' },
      { name: 'og:image', content: 'assets/img/social-min.png' },
      { name: 'og:email', content: 'eskinderget@gmail.com' },
      { name: 'og:url', content: 'https://eskinderg.github.io' },
      { name: 'og:type', content: 'website' },
      { name: 'description', content: 'Hi, my name is Eskinder Getahun. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge and experience in order to develop professional web applications.' },
      { name: 'reply-to', content: 'eskinderget@gmail.com' },
      { name: 'url', content: 'https://eskinderg.github.io' },
      { name: 'image', content: 'assets/img/social-min.png' },
      { name: 'author', content: 'Eskinder, eskinderget@gmail.com' },
      { name: 'keywords', content: 'Angular, Web, Frontend, Developer, Fullstack, Portfolio, Eskinder, Getahun' },
      { name: 'description', content: 'Hi, my name is Eskinder Getahun. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge and experience in order to develop professional web applications.' },
      { itemprop: 'name', content: 'Eskinder | Profile' },
      { itemprop: 'description', content: 'Hi, my name is Eskinder Getahun. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge and experience in order to develop professional web applications.' },
      { itemprop: 'image', content: 'assets/img/social-min.png' }
    ]);

    if (!this.languageService.texts) {
      this.languageService.getTexts(this.selectedLang).subscribe({
        next: data => {
          this.languageService.texts = data;
          this.ref.detectChanges();
        },
        error: err => console.error(err)
      });
    }

    if (!this.languageService.colors) {
      this.languageService.getColorList().subscribe({
        next: data => {
          this.languageService.colors = data["colors"]
          this.speedDialFabButtons = this.languageService.colors;
          this.ref.detectChanges();
        },
        error: err => console.error(err)
      });
    }
  }

  onSpeedDialFabClicked(btn: { icon: string, theme: string }) {
    this.selectedTheme = btn.theme;
    localStorage.setItem('theme', btn.theme);
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
