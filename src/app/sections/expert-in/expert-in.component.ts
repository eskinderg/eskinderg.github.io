import { ViewChild, ElementRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.component.html',
  styleUrls: ['./expert-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertInSectionComponent extends BaseComponent {

  @ViewChild('expertin') override section: ElementRef;

}
