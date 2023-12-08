import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomplishmentsSectionComponent extends BaseComponent {

  @ViewChild('accomplishments') override section: ElementRef;

}
