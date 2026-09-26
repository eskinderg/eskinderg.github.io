import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../..//providers/language.service';

import { MenuComponent } from './menu.component';
import { ThemeService } from '../../../theme/theme.service';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';
import { EducationConferencesSectionComponent } from '../../../sections';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let mainButton: DebugElement;
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
            imports: [MenuComponent],
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

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        testLanguageService.sections['education'] = TestBed.createComponent(
            EducationConferencesSectionComponent
        ).componentInstance;
        fixture.detectChanges();
        mainButton = fixture.debugElement.query(By.css('.menu-button'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display menu when clicked', () => {
        const toggleMenuFn = vi.spyOn(component.languageService, 'toggleMenu');
        mainButton.triggerEventHandler('click', null);
        component.languageService.menu.emit(true);
        expect(component.visible).toBe(true);
        expect(toggleMenuFn).toHaveBeenCalled();
    });

    it('mouse move', () => {
        let menuItem: DebugElement;
        mainButton.triggerEventHandler('click', null);
        // expect(component.visible).toBe(true);
        menuItem = fixture.debugElement.query(By.css('nav .link:nth-child(5 of .link) .text-container'));

        fixture.debugElement.query(By.css('.link')).triggerEventHandler('mousemove', null);
        fixture.debugElement.query(By.css('.link')).triggerEventHandler('mouseout', null);
        menuItem.triggerEventHandler('click', null);
        // expect(component.visible).toBe(false);
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
