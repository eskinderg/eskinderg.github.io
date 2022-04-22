import { ViewChild, AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('about') aboutSection: ElementRef;

  constructor(public portfolio: LanguageService, public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.portfolio.sections['about'] = this.aboutSection;
  }

  onPdfDownload() {
    this.googleAnalyticsService.eventEmitter("click", "about", "download", "click", 10)
  }

}
