import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../..//providers/language.service';

import { MenuComponent } from './menu.component';
import { ThemeService } from '../../../theme/theme.service';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { EducationConferencesSectionComponent } from '../../../sections';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let mainButton: DebugElement;
    let languageService: LanguageService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuComponent],
            providers: [
                LanguageService,
                ThemeService,
                GoogleAnalyticsService,
                provideHttpClient(),
                provideHttpClientTesting(),
                provideZonelessChangeDetection()
            ]
        }).compileComponents();

        languageService = TestBed.inject(LanguageService);
        httpController = TestBed.inject(HttpTestingController);

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;

        languageService.sections['education'] = TestBed.createComponent(
            EducationConferencesSectionComponent
        ).componentInstance;

        languageService.loadLanguages().subscribe(() => {
            languageService.setLanguage('en').subscribe(() => {
                expect(languageService.Language).toBe('en');
            });
        });

        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/en.json');
        expect(req2.request.method).toBe('GET');
        req2.flush(en);

        fixture.detectChanges();
        mainButton = fixture.debugElement.query(By.css('.menu-button'));
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display menu when clicked', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.visible).toBe(true);
    });

    it('should display menu and should hide menu when item is clicked', () => {
        let menuItem: DebugElement;
        mainButton.triggerEventHandler('click', null);
        expect(component.visible).toBe(true);
        menuItem = fixture.debugElement.query(By.css('nav .link:nth-child(5 of .link) .text-container'));

        fixture.debugElement.query(By.css('.link')).triggerEventHandler('mousemove', null);
        fixture.debugElement.query(By.css('.link')).triggerEventHandler('mouseout', null);
        menuItem.triggerEventHandler('click', null);
        expect(component.visible).toBe(false);
    });

    it('mouse scroll', async () => {
        const mockEvent = {
            srcElement: {
                documentElement: {
                    scrollTop: 0
                }
            }
        };
        component.onScroll(mockEvent);
        fixture.detectChanges();
        expect(component.atTop).toBe(true);

        mockEvent.srcElement.documentElement.scrollTop = 100;
        component.onScroll(mockEvent);
        fixture.detectChanges();
        expect(component.atTop).toBe(false);
    });
});
