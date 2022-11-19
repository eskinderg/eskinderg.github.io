import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class LanguageService {

  public texts: any;
  public colors: any;
  public loading = false;
  public sections = {};
  public menuVisible = false;
  private langList: any;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {

    this.Language = localStorage.getItem('language') || "en";

    const langPath = 'assets/json/lang.json';

    this.http.get<[]>(langPath).subscribe(lang => {
      this.langList = lang;
    })

  }

  set Language(lang: any) {
    localStorage.setItem('language', lang)
    this.setLanguage(lang);
  }

  get Language() {
    return localStorage.getItem('language') || "en";
  }

  get LanguageList() {
    return this.langList;
  }

  private setLanguage(lang: any) {
    this.http.get<{}>(this.getLangPath(lang)).subscribe({
      next: data => {
        this.texts = data;
      },
      error: err => console.error(err)
    });
  }

  private getLangPath(lang: any): string {
    if (!isDevMode()) {
      return `assets/json/${lang || 'en'}.min.json`;
    }
    else {
      return `assets/json/${lang || 'en'}.json`;
    }
  }

  toggleMenu(value?: any) {
    if (value || value === false) {
      this.menuVisible = value;
    } else {
      // tslint:disable-next-line:no-unused-expression triple-equals
      this.menuVisible != this.menuVisible;
    }

    this.menu.emit(this.menuVisible);
  }

  getColorList() {
    const colorPath = 'assets/json/colors.json';
    return this.http.get<[]>(colorPath);
  }

}
