import { Component, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSectionComponent extends BaseComponent {

  @ViewChild('intro') override section: ElementRef;

}
