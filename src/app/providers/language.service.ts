import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable()
export class LanguageService {

  public texts: any;
  public colors: any;
  public loading = false;
  public sections = {};
  public menuVisible = false;
  private langList: any;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();
  @Output() languageChange: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(public http: HttpClient) { }

  set Language(lang: any) {
    localStorage.setItem('language', lang)
    new Promise((resolve) => {
      this.setLanguage(lang).subscribe(() => { resolve(true) })
    })
  }

  get Language() {
    return localStorage.getItem('language') || "en";
  }

  get LanguageList() {
    return this.langList;
  }

  public setLanguage(lang: any): Observable<boolean> {
    return this.http.get(this.getLangPath(lang)).pipe(
      map((data) => {
        this.texts = data;
        this.languageChange.emit(data);
        return true
      }),
      catchError ((error) => {
        console.error(error)
        return of(false)
      }));
  }

  private getLangPath(lang: any): string {
    if (!isDevMode()) {
      return `assets/json/${lang || 'en'}.min.json`;
    }
    else {
      return `assets/json/${lang || 'en'}.json`;
    }
  }

  public translateColor(color: string): string {
    return (
      (this.texts)?.colors && (this.texts)?.colors[`${color.toLowerCase()}`] ?
        (this.texts)?.colors[`${color.toLowerCase()}`] :
        color
    );
  }

  toggleMenu(value?: any) {
    if (value || value === false) {
      this.menuVisible = value;
    } else {
      this.menuVisible != this.menuVisible;
    }

    this.menu.emit(this.menuVisible);
  }

  getColorList() {
    const colorPath = 'assets/json/colors.json';
    return this.http.get<[]>(colorPath);
  }

  public loadLanguages(): Observable<boolean> {

    const langPath = 'assets/json/lang.json';

    return this.http.get(langPath).pipe(
      map((lang) => {
        this.langList = lang
        return true
      }),
      catchError ((error) => {
        console.error(error)
        return of(false)
      }));
  }

}
