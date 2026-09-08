import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../..//providers/language.service';

import { MenuComponent } from './menu.component';
import { LanguageServiceMock } from '../../../language/language.mock';
import { ThemeService } from '../../../theme/theme.service';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let mainButton: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        mainButton = fixture.debugElement.query(By.css('.menu-button'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display menu when clicked', () => {
        mainButton.triggerEventHandler('click', null);
        expect(component.visible).toBe(true);
    });

    it('mouse move', () => {
        let menuItem: DebugElement;
        menuItem = fixture.debugElement.query(By.css('.link'));
        menuItem.triggerEventHandler('mousemove', null);
        menuItem.triggerEventHandler('mouseout', null);
        menuItem.triggerEventHandler('click', null);
        // expect(component.visible).toBe(true);
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
