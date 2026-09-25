import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ThemeService } from '../../../theme/theme.service';
import { BaBackTopComponent } from './babacktop.component';
import { LanguageService } from '../../../providers/language.service';
import { By } from '@angular/platform-browser';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('BackTopComponent', () => {
    let component: BaBackTopComponent;
    let fixture: ComponentFixture<BaBackTopComponent>;
    let testLanguageService: Partial<LanguageService>;

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

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
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
        fixture.detectChanges();
    });

    it('should create', () => {
        // component._onClick();
        component.ngOnInit();
        expect(component).toBeTruthy();
    });
});
