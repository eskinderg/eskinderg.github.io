import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { DropDownMenuComponent } from './dropdown.component';
import { LanguageService } from '../../../providers/language.service';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { ThemeService } from '../../../theme/theme.service';
import { GoogleAnalyticsServiceMock } from '../../../providers/google-analytics.mock.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { testLanguageService } from '../../../../test';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
    let component: DropDownMenuComponent;
    let fixture: ComponentFixture<DropDownMenuComponent>;
    let mainButton: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropDownMenuComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                {
                    provide: GoogleAnalyticsService,
                    useClass: GoogleAnalyticsServiceMock
                },
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DropDownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        mainButton = fixture.debugElement.query(By.css('.menu-btn'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle menu', () => {
        mainButton.triggerEventHandler('click', null);
        expect(component.visible).toBe(true);
    });

    it('should hide menu after clicking pdf download', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        const downloadBtn: DebugElement = fixture.debugElement.query(By.css('.pdf'));
        downloadBtn.triggerEventHandler('click', null);
        expect(component.visible).toBe(false);
    });

    it('should hide menu after clicking doc download', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        const downloadBtn: DebugElement = fixture.debugElement.query(By.css('.doc'));
        downloadBtn.triggerEventHandler('click', null);
        expect(component.visible).toBe(false);
    });

    it('should hide menu after clicking outside', () => {
        component.clickout({ target: null });
        expect(component.visible).toBe(false);
    });
});
