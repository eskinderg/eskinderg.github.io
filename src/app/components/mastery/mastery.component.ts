import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss'],
  imports: [CommonModule]
})
export class MasteryComponent {

  @Input() item: any;

  constructor() { }

}
