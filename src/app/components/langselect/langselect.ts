import { Component, Input }from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-langselect',
  templateUrl: './langselect.html',
  styleUrls: ['./langselect.scss']
})
export class LangSelectComponent {

  public languages: any;
  public selectedLangugage: any;

  constructor(public portfolio: LanguageService) {
    this.portfolio.getLangList().subscribe(lang => {
      this.languages = lang;
    })

    this.selectedLangugage = this.translate(localStorage.getItem('language') || "en");
  }

  changeLanguage(lang:string) {
    this.portfolio.getTexts(lang).subscribe(
      data => {
        this.portfolio.texts = data;
        localStorage.setItem('language',lang);
        this.selectedLangugage = this.translate(lang);
      },
      err => console.error(err)
    );
  }

  translate (lang:string):any {

    switch (lang)
    {
      case "am":
        return "ET"
      case "en":
        return "GB";
    }
  }
}
