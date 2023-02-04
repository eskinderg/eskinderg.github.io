import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef, AfterViewInit, Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { MasteryComponent } from 'src/app/components/mastery/mastery.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

@Component({
  standalone: true,
  selector: 'app-expert-in',
  templateUrl: './expert-in.component.html',
  styleUrls: ['./expert-in.component.scss'],
  imports: [
    CommonModule,
    MasteryComponent,
    TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertInComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('technologies') expertinSection: ElementRef;

  constructor(
    public override portfolio: LanguageService,
    public override themeService: ThemeService,
    public override ref: ChangeDetectorRef
  ) { super(portfolio, themeService, ref)}

  ngAfterViewInit() {
    this.portfolio.sections['technologies'] = this.expertinSection;
  }

}
