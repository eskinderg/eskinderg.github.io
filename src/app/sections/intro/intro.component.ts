import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SeparatorComponent } from 'src/app/components/separator/separator.component';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [MatTooltipModule, SeparatorComponent]
})
export class IntroComponent implements AfterViewInit {

  @ViewChild('intro') introSection: ElementRef;

  constructor(public portfolio: LanguageService) { }

  ngAfterViewInit() {
    this.portfolio.sections['intro'] = this.introSection;
  }

}
