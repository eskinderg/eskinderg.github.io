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
            imports: [AppComponent],
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

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should render right', () => {
        const langSelect = findComponent(fixture, 'app-right');
        expect(langSelect).toBeTruthy();
    });

    it('should render color picker component', () => {
        const speedDial = findComponent(fixture, 'app-color-picker');
        expect(speedDial).toBeTruthy();
    });

    it('renders app menu', () => {
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

    it('renders outline menu', () => {
        const outline = findComponent(fixture, 'app-outline');
        expect(outline).toBeTruthy();
    });

    it('should update scrollTop on wheel event', () => {
        const outlineComponent = fixture.debugElement.query(By.css('app-outline'));
        const initialScrollTop = component.mainWrapper().nativeElement.scrollTop;

        // Create and dispatch a WheelEvent
        const wheelEvent = new WheelEvent('mouseWheelScroll', {
            deltaY: 50
        });

        outlineComponent.nativeElement.dispatchEvent(wheelEvent);
        fixture.detectChanges();

        // Assert that scrollTop increased by deltaY
        expect(component.mainWrapper().nativeElement.scrollTop).toBe(initialScrollTop + 50);
    });
});

export function findComponent<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}
