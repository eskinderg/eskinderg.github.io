import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LanguageService {
  text: any = {};

  constructor(private http: HttpClient) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/json/${lang || 'en'}.json`;
      // const langPath = '/assets/json/texts_en.json';
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.text = Object.assign({}, translation || {});
          resolve(this.text);
        },
        error => {
          this.text = {};
          resolve(this.text);
        }
      );
    });
  }
}
