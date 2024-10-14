import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [TooltipDirective, NgClass]
})
export class MenuComponent implements OnInit {
    public hovered: any;
    public visible: boolean;
    public atTop = true;

    constructor(public lang: LanguageService) {}

    ngOnInit() {
        this.lang.menu.subscribe((value) => {
            this.visible = value;
        });
    }

    onHover(link: any) {
        this.hovered = link;
    }
    onMouseOut() {
        this.hovered = '';
    }

    toggleMenu() {
        this.lang.toggleMenu(!this.visible);
    }

    onScroll(event: any) {
        const scrollTop = event.srcElement.documentElement.scrollTop;
        // console.log(scrollTop);
        if (scrollTop === 0) {
            this.atTop = true;
        } else {
            this.atTop = false;
        }
    }

    scrollTo(element: any) {
        this.visible = false;
        const section = this.lang.sections[element];
        section().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
