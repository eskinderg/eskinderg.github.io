import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../providers/theme.service';
import { GoogleAnalyticsService } from '../providers/google-analytics.service';

@Component({
  selector: 'app-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements AfterViewInit {

  @ViewChild(BaseComponent) section: ElementRef;

  constructor(
    public lang: LanguageService,
    public themeService: ThemeService,
    public ref: ChangeDetectorRef,
    public googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.lang.languageChange.subscribe(() => {
      this.ref.detectChanges();
    })

    this.themeService.themeChange.subscribe(() => {
      this.ref.detectChanges();
    })
  }

  ngAfterViewInit(): void {

    const ele = this.constructor.name
      .replace('SectionComponent', '')
      .replace('Component', '')
      .replace('Conferences', '')
      .toLowerCase();

    this.lang.sections[ele] = this.section;
  }

}
