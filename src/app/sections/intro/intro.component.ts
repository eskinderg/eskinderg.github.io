import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit {

  @ViewChild('intro') videoSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['intro'] = this.videoSection;
  }

}
