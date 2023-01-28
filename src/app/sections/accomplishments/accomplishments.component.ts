import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
  ]
})
export class AccomplishmentsComponent implements AfterViewInit {

  @ViewChild('accomplishments') accomplishmentsSection: ElementRef;

  constructor(public portfolio: LanguageService, public themeService: ThemeService) { }

  ngAfterViewInit() {
    this.portfolio.sections['accomplishments'] = this.accomplishmentsSection;
  }

}
