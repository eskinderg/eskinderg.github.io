import {
    Component,
    ElementRef,
    Input,
    EventEmitter,
    OnInit,
    viewChild,
    HostListener,
    Output,
    ChangeDetectionStrategy
} from '@angular/core';
import { NgClass } from '@angular/common';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-outline',
    templateUrl: './outline.html',
    styleUrls: ['./outline.scss'],
    standalone: true,
    imports: [NgClass]
})
export class OutlineComponent extends BaseComponent implements OnInit {
    currentSection: string;
    @Output() public mouseWheelScroll: EventEmitter<any> = new EventEmitter<any>();
    @Input() public onWindowScroll: EventEmitter<any>;
    _selector = viewChild.required<ElementRef>('outline');

    public spiedTags = [
        'APP-INTRO',
        'APP-ABOUT',
        'APP-EXPERTIN',
        'APP-ACCOMPLISHMENTS',
        'APP-EXPERIENCE',
        'APP-EDUCATION',
        'APP-CONTACT'
    ];

    scrollTo(element: any) {
        const section = this.lang.sections[element];
        section().nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    @HostListener('mousewheel', ['$event']) onMousewheel(event: WheelEvent) {
        this.mouseWheelScroll.emit(event);
    }

    ngOnInit(): void {
        this.onWindowScroll.subscribe((winScrollEvent: any) => {
            let currentSec: string;
            // const children = winScrollEvent.target.children['parentDiv'].children;
            const children = this.appRef.components[0].instance.appComponentWrapper().nativeElement.children;

            const scrollTop = winScrollEvent.target.scrollTop;
            // const parentOffset = winScrollEvent.target.offsetTop;
            // const parentOffsetHeight = winScrollEvent.target.offsetHeight;

            this._selector().nativeElement.style.display =
                winScrollEvent.target.scrollTop > winScrollEvent.target.offsetHeight - scrollTop
                    ? 'inline-block'
                    : 'none';

            for (let i = 0; i < children.length; i++) {
                const element = children[i];
                if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
                    // console.log(element.offsetTop, parentOffsetHeight, scrollTop, element.offsetHeight, element.id)
                    if (scrollTop >= element.offsetTop - 250) {
                        currentSec = element.tagName.substring(4).toLowerCase();
                    }
                }
            }

            if (currentSec !== this.currentSection) {
                this.currentSection = currentSec;
                this.ref.detectChanges();
            }
        });
    }
}
