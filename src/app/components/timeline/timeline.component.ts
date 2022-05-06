import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() job: any;
  @Input() index: any;
  @Input() reverse: boolean;

  constructor(public portfolio: LanguageService) { }

  ngOnInit(): void {
  }

}
