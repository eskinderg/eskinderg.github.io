import {
    Component,
    ElementRef,
    EventEmitter,
    viewChild,
    HostListener,
    Output,
    ChangeDetectionStrategy,
    AfterViewInit,
    inject
} from '@angular/core';
import { NgClass } from '@angular/common';
import { WrapperRefService } from '../wrapper-ref.service';
import { BaseComponent } from '../../../sections/base.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-outline',
    templateUrl: './outline.html',
    styleUrls: ['./outline.scss'],
    imports: [NgClass]
})
export class OutlineComponent extends BaseComponent implements AfterViewInit {
    @Output() public mouseWheelScroll: EventEmitter<any> = new EventEmitter<any>();
    _selector = viewChild.required<ElementRef>('outline');
    private wrapperRefService = inject(WrapperRefService);
    currentSection: string;

    public spiedTags = [
        'APP-INTRO',
        'APP-ABOUT',
        'APP-EXPERTIN',
        'APP-ACCOMPLISHMENTS',
        'APP-EXPERIENCE',
        'APP-EDUCATION',
        'APP-CONTACT'
    ];

    trackItem(index: number, item: any): any {
        return index + item.name;
    }

    scrollTo(element: any) {
        const section = this.languageService.sections[element];
        section().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    @HostListener('mousewheel', ['$event']) onMousewheel($event: Event) {
        $event.preventDefault();
        this.mouseWheelScroll.emit($event);
    }

    ngAfterViewInit(): void {
        this.scrollService.scroll$.subscribe(({ srcElement, target }: any) => {
            if (!srcElement) return;

            // 1. Toggle visibility of the outline
            const { scrollTop, offsetHeight } = target;
            const isPastThreshold = scrollTop > offsetHeight - scrollTop;
            this._selector().nativeElement.style.display = isPastThreshold ? 'inline-block' : 'none';

            // 2. Identify the current section based on scroll position
            let currentSec = this.currentSection;
            const children = this.wrapperRefService.wrapperElementRef.nativeElement.children;

            for (const element of children) {
                if (
                    this.spiedTags.includes(element.tagName) &&
                    scrollTop >= (element as HTMLElement).offsetTop - 250
                ) {
                    currentSec = element.tagName.substring(4).toLowerCase();
                }
            }

            // 3. Update state and trigger change detection if the section changed
            if (currentSec !== this.currentSection) {
                this.currentSection = currentSec;
                this.ref.detectChanges();
            }
        });
    }
}
