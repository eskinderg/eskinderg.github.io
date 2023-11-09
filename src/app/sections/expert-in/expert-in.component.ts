import { ViewChild, ElementRef, AfterViewInit, Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  selector: 'app-expert-in',
  templateUrl: './expert-in.component.html',
  styleUrls: ['./expert-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertInSectionComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('technologies') expertinSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) { super(lang, theme, changeRef)}

  ngAfterViewInit() {
    this.portfolio.sections['technologies'] = this.expertinSection;
  }

}
