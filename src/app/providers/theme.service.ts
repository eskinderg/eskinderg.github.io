
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {

  private colorList: any;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {
    // this.getColorList().subscribe({
    //   next: data => {
    //     this.colorList = data["colors"]
    //     console.log(data)
    //   },
    //   error: err => console.error(err)
    // });

    const colorPath = 'assets/json/colors.json';

    this.http.get<[]>(colorPath).subscribe(colors => {
      this.colorList=colors['colors']
    })

  }

  get Theme() {
    return localStorage.getItem('theme');
  }

  set Theme(theme: any) {
    localStorage.setItem('theme', theme);
  }

  get Colors() {
    return this.colorList;
  }

  // private getColorList() {
  //   const colorPath = 'assets/json/colors.json';
  //   return this.http.get<[]>(colorPath);
  // }

}
