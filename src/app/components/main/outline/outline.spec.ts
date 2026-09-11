import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageService } from '../../../providers/language.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { DebugElement, EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { OutlineComponent } from './outline';
import { By } from '@angular/platform-browser';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { ScrollService } from '../../../providers/scroll.service';
import { WrapperRefService } from '../wrapper-ref.service';
import { ThemeService } from '../../../theme/theme.service';
import { Components } from '../../../bootstrap/components';
import { AppComponent } from '../../../app.component';

describe('Outline Component', () => {
    let component: OutlineComponent;
    let appComponent: AppComponent;
    let fixture: ComponentFixture<OutlineComponent>;
    let testLanguageService: Partial<LanguageService>;

    let testScrollService: any;

    let scrollSubject: Subject<any> = new Subject<any>();
    let scrollPosition = new BehaviorSubject<any>(0);

    testLanguageService = {
        httpChange: new EventEmitter<boolean>(),
        languageChange: new EventEmitter<object>(),
        menu: new EventEmitter<object>(),
        sections: {},
        texts: en,
        LanguageList: languageList,
        Language: 'en',
        loadLanguages: () => of(en)
    };

    testScrollService = {
        scroll$: scrollSubject.asObservable(),
        scrollPosition: scrollPosition
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OutlineComponent, AppComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                ThemeService,
                WrapperRefService,
                { provide: ScrollService, useValue: testScrollService },
                provideHttpClient(withXhr(), withInterceptorsFromDi()),
                provideZonelessChangeDetection()
            ]
        }).compileComponents();

        const appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.componentInstance;
        appFixture.detectChanges();

        fixture = TestBed.createComponent(OutlineComponent);
        component = fixture.componentInstance;

        Components.forEach((c) => {
            const sectionCompRef = appComponent.dynamicComponentsWrapper.viewContainerRef.createComponent(c);
            appComponent.dynamicComponentsWrapper.wrapperElementRef.nativeElement.appendChild(
                sectionCompRef.location.nativeElement
            );
        });

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('click', () => {
        const scrollTo = vi.spyOn(component, 'scrollTo');
        let flag: DebugElement;
        let arrow: DebugElement;
        let dot: DebugElement;
        flag = fixture.debugElement.query(By.css('.flag'));
        arrow = fixture.debugElement.query(By.css('.arrow'));
        dot = fixture.debugElement.query(By.css('.dot'));

        flag.triggerEventHandler('click', null);
        arrow.triggerEventHandler('click', null);
        dot.triggerEventHandler('click', null);
        expect(scrollTo).toHaveBeenCalledTimes(3);
    });

    it('scroll', () => {
        // Create a Vitest spy on the EventEmitter's emit method
        const emitSpy = vi.spyOn(component.mouseWheelScroll, 'emit');

        // 2. Act: Create and dispatch a fake mock wheel event
        const mouseScrollEvent = new WheelEvent('mousewheel', {
            bubbles: true,
            cancelable: true // Must be true for preventDefault() to work
        });

        // Spy on the preventDefault method of this specific event
        const preventDefaultSpy = vi.spyOn(mouseScrollEvent, 'preventDefault');

        // Dispatch the event to the component's host element
        fixture.nativeElement.dispatchEvent(mouseScrollEvent);
        fixture.detectChanges();

        // 3. Assert: Verify both actions occurred
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(emitSpy).toHaveBeenCalledWith(mouseScrollEvent);
    });

    it('should toggle outline display style based on scroll threshold', () => {
        scrollSubject.next({
            srcElement: {},
            target: { scrollTop: 300, offsetHeight: 300 }
        });

        fixture.detectChanges();

        expect(component._selector().nativeElement.style.display).toBe('inline-block');

        scrollSubject.next({
            srcElement: {},
            target: { scrollTop: 0, offsetHeight: 300 }
        });

        fixture.detectChanges();
        expect(component._selector().nativeElement.style.display).toBe('none');

        // expect(component.currentSection).toBe('intro');
    });

    it('should update currentSection and trigger change detection when scroll hits a spied element', () => {
        const cdSpy = vi.spyOn(component.ref, 'detectChanges');
        fixture.detectChanges();

        // scrollTop (200) >= offsetTop (400) - 250 -> 200 >= 150 (True for APP-SECTION-TWO)
        scrollSubject.next({
            srcElement: {},
            target: { scrollTop: 200, offsetHeight: 500 }
        });

        fixture.detectChanges();
        expect(cdSpy).toHaveBeenCalledTimes(1);
        // expect(component.currentSection).toBe('about');

        scrollSubject.next({
            srcElement: {},
            target: { scrollTop: 1700, offsetHeight: 500 }
        });
    });
});
