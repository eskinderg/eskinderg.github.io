import { ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from './providers/language.service';
import { SpeedDialFabPosition } from './components/speeddial/speed-dial-fab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeSection: string;
  public speedDialFabButtons;
  public selectedTheme: string;
  public selectedLang: string;

  SpeedDialFabPosition          = SpeedDialFabPosition;
  speedDialFabPosition          = SpeedDialFabPosition.Top;
  speedDialFabColumnDirection   = 'column';
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

  constructor(public languageService: LanguageService, public ref: ChangeDetectorRef) {

    this.selectedTheme = localStorage.getItem("theme");
    this.selectedLang = localStorage.getItem('language');

    if (!this.languageService.texts) {
      this.languageService.getTexts(this.selectedLang).subscribe(
        data => {
          this.languageService.texts = data;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }

    if (!this.languageService.colors) {
      this.languageService.getColorList().subscribe(
        (data: any) => {
          this.languageService.colors = data["colors"]
          this.speedDialFabButtons = this.languageService.colors;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }
  }

  onSpeedDialFabClicked(btn: {icon: string, theme: string}) {
    this.selectedTheme = btn.theme;
    localStorage.setItem('theme',btn.theme);
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
