import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective]
})
export class MenuComponent extends BaseComponent implements OnInit {
    public hovered: any;
    public visible: boolean = false;
    public atTop = true;

    ngOnInit() {
        this.languageService.menu.subscribe((value) => {
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
        this.languageService.toggleMenu(!this.visible);
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
        const section = this.languageService.sections[element];
        section().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
