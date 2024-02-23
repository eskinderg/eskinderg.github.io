import { ElementRef, ViewChild, Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-education-conferences',
  templateUrl: './education-conferences.component.html',
  styleUrls: ['./education-conferences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationConferencesSectionComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('education') section: ElementRef;

  ngAfterViewInit(): void {
    this.lang.sections['education'] = this.section;
  }
}
