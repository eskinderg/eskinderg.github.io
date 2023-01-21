import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [
    CommonModule,
    TimelineComponent,
    TitleComponent,
  ]
})
export class ExperienceComponent implements AfterViewInit {

  @ViewChild('experience') experienceSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['experience'] = this.experienceSection;
  }

}
