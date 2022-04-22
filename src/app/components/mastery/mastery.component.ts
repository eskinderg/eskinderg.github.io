import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
