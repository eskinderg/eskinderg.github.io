import { CommonModule } from '@angular/common';
import { ElementRef, ViewChild, Component, AfterViewInit } from '@angular/core';
import { ListComponent } from 'src/app/components/list/list.component';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';

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
  ]
})
export class EducationConferencesComponent implements AfterViewInit {

  @ViewChild('education') educationSection: ElementRef;
  @ViewChild('conferences') conferencesSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['education'] = this.educationSection;
    this.portfolio.sections['conferences'] = this.conferencesSection;
  }

}
