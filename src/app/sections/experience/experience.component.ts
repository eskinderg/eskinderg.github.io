import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent extends BaseComponent {

  @ViewChild('experience') override section: ElementRef;

}
