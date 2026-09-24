import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { TimelineComponent } from './timeline.component';
import { TitleComponent } from '../title/title.component';
import { ChipComponent } from '../chip/chip.component';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import lang from '../../../../assets/json/lang/en.json';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;
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
            imports: [TimelineComponent, TitleComponent, ChipComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        component.job = lang.experience.content;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
