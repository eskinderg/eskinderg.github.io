import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { LanguageService } from '../../../providers/language.service';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('ChipComponent', () => {
    let component: ChipComponent;
    let fixture: ComponentFixture<ChipComponent>;
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
            imports: [ChipComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                provideZonelessChangeDetection()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChipComponent);
        component = fixture.componentInstance;
        component.technology = 'Angular';
        fixture.detectChanges();
    });

    it('should create ChipComponent', () => {
        expect(component).toBeTruthy();
    });
});
