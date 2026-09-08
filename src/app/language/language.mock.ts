import { EventEmitter, Output, Service } from '@angular/core';
import { Observable } from 'rxjs';
import langList from '../../assets/json/lang.json';
import en from '../../assets/json/lang/en.json';

@Service({ autoProvided: false })
export class LanguageServiceMock {
    public sections = {
        intro: null
    };

    public menuVisible = false;

    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    @Output() languageChange: EventEmitter<object> = new EventEmitter<object>();

    @Output() public httpChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    private langList: any = langList;
    public texts: any = en;

    loadLanguages(): any {
        return this.langList;
    }

    setLanguage(lang: any): Observable<any> {
        return lang;
    }

    get LanguageList() {
        return this.langList;
    }

    public translateColor(color: string): string {
        return this.texts.colors && this.texts.colors[`${color.toLowerCase()}`]
            ? this.texts.colors[`${color.toLowerCase()}`]
            : color;
    }

    toggleMenu(value: any) {
        if (value || value === false) {
            this.menuVisible = value;
        }

        this.menu.emit(this.menuVisible);
    }
}
