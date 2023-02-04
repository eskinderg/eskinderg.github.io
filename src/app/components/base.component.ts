import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
  constructor(
    public portfolio: LanguageService,
    public themeService: ThemeService,
    public ref: ChangeDetectorRef
  ) {
    this.portfolio.languageChange.subscribe(() => {
      this.ref.detectChanges();
    })

    this.themeService.themeChange.subscribe(() => {
      this.ref.detectChanges();
    })
  }
}
