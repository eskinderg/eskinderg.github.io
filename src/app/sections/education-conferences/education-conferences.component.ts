import { CommonModule } from '@angular/common';
import { ElementRef, ViewChild, Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-education-conferences',
  templateUrl: './education-conferences.component.html',
  styleUrls: ['./education-conferences.component.scss'],
  imports: [
    CommonModule,
    ListComponent,
    TitleComponent,
    SeparatorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationConferencesComponent extends BaseComponent implements AfterViewInit {

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
