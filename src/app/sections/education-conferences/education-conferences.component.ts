import { ElementRef, ViewChild, Component, AfterViewInit } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-education-conferences',
  templateUrl: './education-conferences.component.html',
  styleUrls: ['./education-conferences.component.scss']
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
