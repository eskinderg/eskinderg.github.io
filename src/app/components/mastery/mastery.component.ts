import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent {

  @Input() item;

  constructor() { }

}
