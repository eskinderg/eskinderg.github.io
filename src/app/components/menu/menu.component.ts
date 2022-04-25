import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(350, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(350, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  public hovered: any;
  public visible: boolean;
  public atTop = true;

  constructor(public portfolio: LanguageService) {

  }

  ngOnInit() {
    this.portfolio.menu.subscribe(value => {
      this.visible = value;
    });
  }

  onHover(link) {
    this.hovered = link;
  }
  onMouseOut() {
    this.hovered = '';
  }

  toggleMenu() {
    this.portfolio.toggleMenu(!this.visible);
  }

  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop === 0) {
      this.atTop = true;
    } else {
      this.atTop = false;
    }
  }

  scrollTo(element) {
    // console.log(element);
    this.visible = false;
    const section = this.portfolio.sections[element];
    // console.log(section);
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
