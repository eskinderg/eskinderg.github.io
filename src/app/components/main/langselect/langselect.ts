import { Component } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
    selector: 'app-langselect',
    templateUrl: './langselect.html',
    styleUrls: ['./langselect.scss']
})
export class LangSelectComponent {
    public languages: any;

    constructor(public lang: LanguageService) {}

    changeLanguage(lang: string) {
        this.lang.Language = lang;
    }
}
