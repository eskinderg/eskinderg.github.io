import { CommonModule } from '@angular/common';
import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import { MasteryComponent } from 'src/app/components/mastery/mastery.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-expert-in',
  templateUrl: './expert-in.component.html',
  styleUrls: ['./expert-in.component.scss'],
  imports: [
    CommonModule,
    MasteryComponent,
    TitleComponent
  ]
})
export class ExpertInComponent implements AfterViewInit {

  @ViewChild('technologies') expertinSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['technologies'] = this.expertinSection;
  }

}
