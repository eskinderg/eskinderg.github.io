import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ThemeService } from '../../../theme/theme.service';
import { BaBackTopComponent } from './babacktop.component';
import { LanguageService } from '../../../providers/language.service';
import { By } from '@angular/platform-browser';
import {
    ApplicationRef,
    ComponentRef,
    DebugElement,
    EventEmitter,
    provideZonelessChangeDetection
} from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';
import { AppComponent } from '../../../app.component';

describe('BackTopComponent', () => {
    let component: BaBackTopComponent;
    let fixture: ComponentFixture<BaBackTopComponent>;
    let testLanguageService: Partial<LanguageService>;
    let appRef: ApplicationRef;
    let appComponentRef: ComponentRef<AppComponent>;

    testLanguageService = {
        httpChange: new EventEmitter<boolean>(),
        languageChange: new EventEmitter<object>(),
        menu: new EventEmitter<any>(),
        sections: {},
        toggleMenu: vi.fn(),
        texts: en,
        LanguageList: languageList,
        Language: 'en',
        loadLanguages: () => of(languageList),
        translateColor: vi.fn()
    };

    beforeAll(() => {
        // Polyfill scroll for HTMLElement if it doesn't exist in the testing DOM environment
        if (!HTMLElement.prototype.scroll) {
            HTMLElement.prototype.scroll = function () {};
        }

        // Optional: Do the same for scrollTo if your codebase relies on it
        if (!HTMLElement.prototype.scrollTo) {
            HTMLElement.prototype.scrollTo = function () {};
        }
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BaBackTopComponent, AppComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BaBackTopComponent);
        component = fixture.componentInstance;
        component._selector = fixture.debugElement.queryAll(By.css('.ba-back-top'))[0].nativeElement;

        appRef = TestBed.inject(ApplicationRef);

        // Create a real instance of AppComponent to satisfy the array look-up
        const appFixture = TestBed.createComponent(AppComponent);
        appComponentRef = appFixture.componentRef;

        // Push the real component reference into the ApplicationRef components array
        appRef.components.push(appComponentRef);
        fixture.detectChanges();
    });

    it('should create babackcomponent', () => {
        expect(component).toBeTruthy();
    });

    it('click', () => {
        let mainButton: DebugElement;
        mainButton = fixture.debugElement.query(By.css('.ba-back-top'));
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
    });
});
