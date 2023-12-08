import { ViewChild, Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSectionComponent extends BaseComponent {

  @ViewChild('about') override section: ElementRef;

  onPdfDownload() {
    this.googleAnalyticsService.eventEmitter(
      "download_pdf",
      "about",
      "download",
      "click",
      10
    )
  }

  onDocxDownload() {
    this.googleAnalyticsService.eventEmitter(
      "download_docx",
      "about",
      "download",
      "click",
      10
    )
  }

}
