import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TooltipDirective } from '../../components/app/tooltip/tooltip.directive';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective]
})
export class IntroSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('intro');

    ngAfterViewInit(): void {
        this.languageService.sections['intro'] = this.section;
    }
}
