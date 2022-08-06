import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss']
})
export class AccomplishmentsComponent implements AfterViewInit {

  @ViewChild('accomplishments') accomplishmentsSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['accomplishments'] = this.accomplishmentsSection;
  }

}
