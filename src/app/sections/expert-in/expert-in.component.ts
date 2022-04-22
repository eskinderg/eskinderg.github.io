import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.component.html',
  styleUrls: ['./expert-in.component.scss']
})
export class ExpertInComponent implements AfterViewInit {

  @ViewChild('technologies') expertinSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['technologies'] = this.expertinSection;
  }

}
