import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LanguageService } from './providers/language.service';
import { ThemeService } from './theme/theme.service';
import { GoogleAnalyticsService } from './providers/google-analytics.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from './language/language.mock';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, AppComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideHttpClient(withInterceptorsFromDi())
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
        expect(langdropdown.queryAll(By.css('.langMenuItem')).length).toEqual(2);
    });

    it('should render dark mode toggle component', () => {
        const menu = findComponent(fixture, 'app-toggle');
        expect(menu).toBeTruthy();
    });

    it('renders outline menu', () => {
        const outline = findComponent(fixture, 'app-outline');
        expect(outline).toBeTruthy();
    });
});

export function findComponent<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}
