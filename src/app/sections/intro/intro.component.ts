import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseComponent } from 'src/app/components/base.component';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [MatTooltipModule, SeparatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('intro') introSection: ElementRef;

  constructor(
    public lang: LanguageService,
    public theme: ThemeService,
    public changeRef: ChangeDetectorRef
  ) {
    super(lang, theme, changeRef)
  }

  ngAfterViewInit() {
    this.portfolio.sections['intro'] = this.introSection;
  }

}
