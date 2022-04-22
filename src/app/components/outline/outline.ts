import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss']
})
export class OutlineComponent implements OnInit {

  @Input() currentSection = 'section1';

  constructor(public portfolio: LanguageService) { }

  ngOnInit() { }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element) {
    const section = this.portfolio.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  onHover(link) {
    // this.hovered = link;
  }
  onMouseOut() {
    // this.hovered = '';
  }

}
