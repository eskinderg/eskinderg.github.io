import { CommonModule } from '@angular/common';
import { ViewChild, AfterViewInit, Component, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TitleComponent } from 'src/app/components/title/title.component';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    TitleComponent,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ]
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('about') aboutSection: ElementRef;

  constructor(public portfolio: LanguageService, public googleAnalyticsService: GoogleAnalyticsService) { }

  ngAfterViewInit() {
    this.portfolio.sections['about'] = this.aboutSection;
  }

  onPdfDownload() {
    this.googleAnalyticsService.eventEmitter("download_pdf", "about", "download", "click", 10)
  }

  onDocxDownload() {
    this.googleAnalyticsService.eventEmitter("download_docx", "about", "download", "click", 10)
  }

}
