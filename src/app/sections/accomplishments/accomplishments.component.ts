import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';

@Component({
    selector: 'app-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent]
})
export class AccomplishmentsSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('accomplishments');

    constructor() {
        super();
        this.separator.fillColor1 = 'var(--background1)';
        this.separator.fillColor2 = 'var(--background2)';
    }

    ngAfterViewInit(): void {
        this.languageService.sections['accomplishments'] = this.section;
    }
}
