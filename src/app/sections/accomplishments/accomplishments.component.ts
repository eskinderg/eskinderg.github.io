import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomplishmentsSectionComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('accomplishments') accomplishmentsSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef) }

  ngAfterViewInit() {
    this.portfolio.sections['accomplishments'] = this.accomplishmentsSection;
  }

}
