import { ElementRef, ViewChild, Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-education-conferences',
  templateUrl: './education-conferences.component.html',
  styleUrls: ['./education-conferences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationConferencesSectionComponent extends BaseComponent {

  @ViewChild('education') override section: ElementRef;

}
