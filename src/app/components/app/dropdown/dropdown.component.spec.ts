import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DropDownMenuComponent } from './dropdown.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { GoogleAnalyticsServiceMock } from 'src/app/providers/google-analytics.mock.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DropdownComponent', () => {
    let component: DropDownMenuComponent;
    let fixture: ComponentFixture<DropDownMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropDownMenuComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                {
                    provide: GoogleAnalyticsService,
                    useClass: GoogleAnalyticsServiceMock
                },
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DropDownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle menu', () => {
        component.onClick();
        expect(component.visible).toBe(true);
    });

    it('should hide menu after clicking pdf download', () => {
        component.onPdfDownload();
        expect(component.visible).toBe(false);
    });

    it('should hide menu after clicking doc download', () => {
        component.onDocxDownload();
        expect(component.visible).toBe(false);
    });

    it('should hide menu after clicking outside', () => {
        component.clickout({ target: null });
        expect(component.visible).toBe(false);
    });
});
