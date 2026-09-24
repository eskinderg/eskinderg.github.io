import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { ContactSectionComponent } from './contact.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { testLanguageService } from '../../../test';

describe('ContactSectionComponent', () => {
    let component: ContactSectionComponent;
    let fixture: ComponentFixture<ContactSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactSectionComponent],
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

        fixture = TestBed.createComponent(ContactSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get ethiopian year correctly', () => {
        expect(component.Year).toBeTruthy();
    });

    it('should get copyright correctly', () => {
        expect(component.Copyright).toBeTruthy();
    });
});
