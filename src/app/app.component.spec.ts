import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { DebugElement, EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LanguageService } from './providers/language.service';
import { ThemeService } from './theme/theme.service';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import en from '../assets/json/lang/en.json';
import languageList from '../assets/json/lang.json';
import { of } from 'rxjs';
import { Components } from './bootstrap/components';
import { DynamicComponentsWrapperComponent } from './components/main/dynamic-components-wrapper.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let testLanguageService: Partial<LanguageService>;

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

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, DynamicComponentsWrapperComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app component', () => {
        expect(component).toBeTruthy();
    });

    it('should render right component', () => {
        const langSelect = findComponent(fixture, 'app-right');
        expect(langSelect).toBeTruthy();
    });

    it('should render color picker component', () => {
        const speedDial = findComponent(fixture, 'app-color-picker');
        expect(speedDial).toBeTruthy();
    });

    it('renders app menu component', () => {
        const menu = findComponent(fixture, 'app-menu');
        expect(menu).toBeTruthy();
    });

    it('should render lang-select-drop-dow-menu-component', () => {
        const langdropdown = findComponent(fixture, 'app-lang-dropdown');
        expect(langdropdown).toBeTruthy();
    });

    it('should rende with two languages', () => {
        const langdropdown = findComponent(fixture, 'app-lang-dropdown');
        expect(langdropdown.queryAll(By.css('.lang-menu-item')).length).toEqual(2);
    });

    it('should render dark mode toggle component', () => {
        const menu = findComponent(fixture, 'app-toggle');
        expect(menu).toBeTruthy();
    });

    it('should render the outline menu component', () => {
        const outline = findComponent(fixture, 'app-outline');
        expect(outline).toBeTruthy();
    });

    it('should display or hide OutlineComponent based on wheel event', () => {
        Components.forEach((c) => {
            const sectionCompRef = component.dynamicComponentsWrapper.viewContainerRef.createComponent(c);
            component.dynamicComponentsWrapper.wrapperElementRef.nativeElement.appendChild(
                sectionCompRef.location.nativeElement
            );
        });

        const outlineComponent = findComponent(fixture, 'app-outline');
        Object.defineProperty(component.mainWrapper().nativeElement, 'offsetHeight', {
            value: 500,
            configurable: true
        });
        fixture.detectChanges();
        const element = outlineComponent.nativeElement.querySelector('#outline');

        expect(element.style.display).toBe('none');
        component.mainWrapper().nativeElement.scrollTop = 300;
        component.mainWrapper().nativeElement.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();
        expect(element.style.display).toBe('inline-block');
    });

    it('should trigger onScroll via mouseWheelScroll output/event', () => {
        const spy = vi.spyOn(component, 'onScroll');
        const outlineEl = fixture.debugElement.query(By.css('app-outline'));

        // Trigger the custom or native event binding
        const wheelEvent = new WheelEvent('wheel', { deltaY: 100 });
        outlineEl.triggerEventHandler('mouseWheelScroll', wheelEvent);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalledWith(wheelEvent);
    });
});

export function findComponent<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}
