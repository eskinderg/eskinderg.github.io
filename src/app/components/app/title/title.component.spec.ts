import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';
import { TitleComponent } from './title.component';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('TitleComponent', () => {
    let component: TitleComponent;
    let fixture: ComponentFixture<TitleComponent>;
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
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                provideZonelessChangeDetection(),
                ThemeService
            ],
            imports: [TitleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TitleComponent);
        component = fixture.componentInstance;
        component.title = 'title';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should render title', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title>.main-heading-title').textContent).toContain('title');
    });
});
