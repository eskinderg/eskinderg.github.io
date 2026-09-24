import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { LanguageService } from '../../../providers/language.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { testLanguageService } from '../../../../test';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                provideHttpClient(withXhr(), withInterceptorsFromDi()),
                provideZonelessChangeDetection()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render list', () => {
        component.item = component.lang.texts.education.content;
        expect(component).toBeTruthy();
    });

    it('should create', () => {
        component.item = component.lang.texts.education.content;
        component.type = 'conference';
        fixture.detectChanges();
    });
});
