import {
    Component,
    HostListener,
    Input,
    ElementRef,
    OnInit,
    viewChild,
    ChangeDetectionStrategy
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-back-top',
    styleUrls: ['./baBackTop.scss'],
    template: `
        <i #baBackTop class="ba-back-top" title="Back to Top">
            <svg
                id="svg-back-to-top"
                version="1.1"
                viewBox="0 0 307.05 17.619"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m263.76 47.493-102.01-102.02c-4.5418-4.5374-11.898-4.5374-16.435 0l-102.02 102.02c-4.5367 4.5389-4.5367 11.894 0 16.433l8.2169 8.2169c4.5367 4.5418 11.899 4.5418 16.439 0l85.581-85.586 85.584 85.586c4.5359 4.5418 11.895 4.5418 16.433 0l8.2169-8.2169c4.5418-4.5441 4.5418-11.894-.006-16.433z"
                    style="fill:#ffffff" />
            </svg>
        </i>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaBackTopComponent extends BaseComponent implements OnInit {
    @Input() position = 400;
    @Input() showSpeed = 500;
    @Input() moveSpeed = 700;

    _selector = viewChild.required<ElementRef>('baBackTop');

    @HostListener('click', [])
    _onClick() {
        (this.appRef.components[0].instance as AppComponent)
            .mainWrapper()
            .nativeElement.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    ngOnInit(): void {
        this.scrollService.scroll$.subscribe((e) => {
            if (e.srcElement) {
                this._selector().nativeElement.style.display =
                    e.target.scrollTop > this.position ? 'flex' : 'none';
            }
        });
    }
}
