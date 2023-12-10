import { Component } from '@angular/core';
import { LanguageService } from './providers/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public activeSection: string;

  constructor(public lang: LanguageService) { }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

}
