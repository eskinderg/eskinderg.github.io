import { CommonModule } from '@angular/common';
import { Component }from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  standalone: true,
  selector: 'app-langselect',
  templateUrl: './langselect.html',
  styleUrls: ['./langselect.scss'],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTooltipModule
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
