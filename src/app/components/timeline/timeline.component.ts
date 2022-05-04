import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() job: any;
  @Input() index: any;
  @Input() reverse: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
