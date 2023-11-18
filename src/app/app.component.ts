import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from './providers/language.service';
import { ThemeService } from './providers/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public activeSection: string;

  constructor(
    public languageService: LanguageService,
    public themeService: ThemeService
  ) { }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
