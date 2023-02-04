import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [
    CommonModule,
    TimelineComponent,
    TitleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('experience') experienceSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef)}

  ngAfterViewInit() {
    this.portfolio.sections['experience'] = this.experienceSection;
  }

}
