import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss'],
  imports: [
    CommonModule,
    TitleComponent,
    SeparatorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomplishmentsComponent extends BaseComponent implements AfterViewInit {

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
