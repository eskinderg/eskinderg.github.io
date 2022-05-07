import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent   {

  @Input() item;
  @Input() type;

  constructor() { }

}
