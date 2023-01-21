import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
  imports: [CommonModule]
})
export class SeparatorComponent {

  @Input() fillColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() Inverted: boolean = false;

  constructor() { }

}
