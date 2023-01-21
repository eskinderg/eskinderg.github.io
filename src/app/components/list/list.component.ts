import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule]
})
export class ListComponent   {

  @Input() item;
  @Input() type;

  constructor() { }

}
