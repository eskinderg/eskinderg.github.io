import { Injectable, EventEmitter, Output, ViewChild, ElementRef }from '@angular/core';
import { HttpClient                                              }from '@angular/common/http';
import { environment                                             }from '../../environments/environment';
import { isDevMode                                               }from '@angular/core';

@Injectable()
export class Shared {

  public texts;
  public colors;
  public loading = false;
  public sections = {};
  public langList;
  public menuVisible = false;
  private langPath;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {
    // this.http.get<{}>('/assets/json/lang.json').subscribe(
    //   lang => {
    //     this.langList = lang
    //   })

      // this.getTexts().subscribe(
      //   data => {
      //     this.texts = data;
      //     // this.speedDialFabButtons = this.portfolio.texts.colors;
      //     // this.ref.detectChanges();
      //   },
      //   err => console.error(err)
      // )
  }

  toggleMenu(value?) {
    if (value || value === false) {
      this.menuVisible = value;
    } else {
      // tslint:disable-next-line:no-unused-expression triple-equals
      this.menuVisible != this.menuVisible;
    }

    this.menu.emit(this.menuVisible);
  }

  getLangList() {
    const langPath = 'assets/json/lang.json';
    return this.http.get<[]>(langPath);
  }

  getColorList() {
    const colorPath = 'assets/json/colors.json';
    return this.http.get<[]>(colorPath);
  }

  // getLangList(): Promise<{}> {
  //   return new Promise<{}>((resolve, reject) => {
  //     const langPath = '/assets/json/lang.json';
  //     // const langPath = '/assets/json/texts_en.json';
  //     this.http.get<{}>(langPath).subscribe(
  //       langs => {
  //         this.langList = Object.assign({}, langs || []);
  //         resolve(this.langList);
  //       },
  //       error => {
  //         this.langList = {};
  //         resolve(this.langList);
  //       }
  //     );
  //   });
  // }

  getTexts(lang?: string) {
    if(!isDevMode()) {
      this.langPath = `assets/json/${lang || 'en'}.min.json`;
    }
    else {
      this.langPath = `assets/json/${lang || 'en'}.json`;
    }
    return this.http.get<{}>(this.langPath);

  }

}
