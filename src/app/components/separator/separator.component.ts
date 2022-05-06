import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {

  @Input() fillColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() Inverted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
