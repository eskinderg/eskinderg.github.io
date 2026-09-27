import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, inject } from '@angular/core';
import { TitleComponent } from '../../components/app/title/title.component';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent]
})
export class AccomplishmentsSectionComponent extends BaseComponent implements AfterViewInit {
    section = inject<ElementRef<HTMLElement>>(ElementRef);

    constructor() {
        super();
        this.separator.fillColor1 = 'var(--lightest)';
        this.separator.fillColor2 = 'var(--background2)';
    }

    ngAfterViewInit(): void {
        this.languageService.sections['accomplishments'] = this.section;
    }
}
