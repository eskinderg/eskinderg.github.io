import { HostListener, ViewChild, Component, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import * as jQuery from 'jquery';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';
import { ThemeService } from 'src/app/providers/theme.service';
// import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss'],
  imports: [CommonModule ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineComponent extends BaseComponent {

  @Input() currentSection = 'section1';
  @ViewChild('outline') _selector: ElementRef;

  constructor(
    public override portfolio: LanguageService,
    public override themeService: ThemeService,
    public override ref: ChangeDetectorRef
  ) { super(portfolio, themeService , ref)}

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element: any) {
    const section = this.portfolio.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el = this._selector.nativeElement;
    window.scrollY > window.innerHeight - 150 ? jQuery(el).fadeIn(500) : jQuery(el).fadeOut(200);
  }

}
