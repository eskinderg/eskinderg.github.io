import { ElementRef, ViewChild, Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  selector: 'app-education-conferences',
  templateUrl: './education-conferences.component.html',
  styleUrls: ['./education-conferences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationConferencesSectionComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('education') educationSection: ElementRef;
  @ViewChild('conferences') conferencesSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef)}

  ngAfterViewInit() {
    this.portfolio.sections['education'] = this.educationSection;
    this.portfolio.sections['conferences'] = this.conferencesSection;
  }

}
