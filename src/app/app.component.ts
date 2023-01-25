import { ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from './providers/language.service';
import { SpeedDialFabPosition } from './components/speeddial/speed-dial-fab.component';
import { ThemeService } from './providers/theme.service';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})
export class AppComponent {

  public activeSection       : string;
  public speedDialFabButtons : any;

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

  constructor(
    public languageService: LanguageService,
    public ref: ChangeDetectorRef,
    public themeService: ThemeService
  ) { }

  onSpeedDialFabClicked(btn: { icon: string, theme: string }) {
    this.themeService.Theme = btn.theme;
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
