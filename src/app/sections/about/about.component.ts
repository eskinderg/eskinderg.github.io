import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, inject } from '@angular/core';
import { TitleComponent } from '../../components/app/title/title.component';
import { DropDownMenuComponent } from '../../components/app/dropdown/dropdown.component';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, DropDownMenuComponent]
})
export class AboutSectionComponent extends BaseComponent implements AfterViewInit {
    section = inject<ElementRef<HTMLElement>>(ElementRef);

    constructor() {
        super();
        this.hasSeparator = false;
        this.separator.fillColor1 = 'var(--background2)';
        this.separator.fillColor2 = 'var(--background1)';
    }

    ngAfterViewInit(): void {
        this.languageService.sections['about'] = this.section;
    }

    trackAbout(index: number, paragraph: any): any {
        return index + paragraph;
    }
}
