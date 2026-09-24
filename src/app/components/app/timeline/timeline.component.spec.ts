import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { TimelineComponent } from './timeline.component';
import { TitleComponent } from '../title/title.component';
import { ChipComponent } from '../chip/chip.component';
import { provideZonelessChangeDetection } from '@angular/core';
import lang from '../../../../assets/json/lang/en.json';
import { testLanguageService } from '../../../../test';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

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
