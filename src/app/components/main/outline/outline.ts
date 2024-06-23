import {
    ViewChild,
    Component,
    ElementRef,
    Input,
    ChangeDetectionStrategy,
    EventEmitter,
    OnInit,
    ChangeDetectorRef
} from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
    selector: 'app-outline',
    templateUrl: './outline.html',
    styleUrls: ['./outline.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineComponent implements OnInit {
    currentSection: string;
    @Input() public onWindowScroll: EventEmitter<any>;
    @ViewChild('outline') _selector: ElementRef;

    public spiedTags = [
        'APP-INTRO',
        'APP-ABOUT',
        'APP-EXPERT-IN',
        'APP-ACCOMPLISHMENTS',
        'APP-EXPERIENCE',
        'APP-EDUCATION-CONFERENCES',
        'APP-CONTACT'
    ];

    constructor(
        public lang: LanguageService,
        public theme: ThemeService,
        public ref: ChangeDetectorRef
    ) {}

    scrollTo(element: any) {
        const section = this.lang.sections[element];
        section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    ngOnInit(): void {
        this.onWindowScroll.subscribe((winScrollEvent: any) => {
            let currentSec: string;
            const children = winScrollEvent.target.children['parentDiv'].children;
            const scrollTop = winScrollEvent.target.scrollTop;
            // const parentOffset = winScrollEvent.target.offsetTop;
            // const parentOffsetHeight = winScrollEvent.target.offsetHeight;

            this._selector.nativeElement.style.display =
                winScrollEvent.target.scrollTop > winScrollEvent.target.offsetHeight - scrollTop
                    ? 'inline-block'
                    : 'none';

            for (let i = 0; i < children.length; i++) {
                const element = children[i];
                if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
                    // console.log(element.offsetTop, parentOffsetHeight, scrollTop, element.offsetHeight, element.id)
                    if (scrollTop >= element.offsetTop) {
                        currentSec = element.id;
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
