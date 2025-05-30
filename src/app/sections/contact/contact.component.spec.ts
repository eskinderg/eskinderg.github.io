import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { ContactSectionComponent } from './contact.component';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ContactSectionComponent', () => {
    let component: ContactSectionComponent;
    let fixture: ComponentFixture<ContactSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactSectionComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
