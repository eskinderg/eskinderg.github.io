import { CommonModule } from '@angular/common';
import { Component }from '@angular/core';
import { MatLegacyMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-langselect',
  templateUrl: './langselect.html',
  styleUrls: ['./langselect.scss'],
  imports: [
    CommonModule,
    MatLegacyMenuModule,
    MatLegacyTooltipModule
  ]
})
export class LangSelectComponent {

  public languages: any;

  constructor(public portfolio: LanguageService) {
  }

  changeLanguage(lang:string) {
    this.portfolio.Language = lang;
  }

}
