import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';
import { ThemeService } from '../../../theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ThemeMode } from '../../../theme/theme.mode';
describe('ToggleComponent', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;
    let testThemeService: Partial<ThemeService>;

    testThemeService = {
        get Theme() {
            return 'indigo';
        },
        SetAppTheme: vi.fn()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToggleComponent],
            providers: [
                {
                    provide: ThemeService,
                    useValue: testThemeService
                },
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open menu when main button is clicked', () => {
        fixture.detectChanges();
        let mainButton: DebugElement;
        let menu: DebugElement;
        const toggleOpen = vi.spyOn(component, 'toggleOpen');
        const close = vi.spyOn(component, 'close');
        mainButton = fixture.debugElement.query(By.css('.theme-toggle-main-btn'));
        menu = fixture.debugElement.query(By.css('.menu'));

        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(menu.nativeElement.classList.contains('open')).toBe(true);
        expect(toggleOpen).toHaveBeenCalled();
        expect(component.open).toBe(true);

        document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        fixture.detectChanges();

        expect(close).toHaveBeenCalled();
        expect(component.open).toBe(false);
    });

    it('should change theme when clicked', () => {
        fixture.detectChanges();
        let mainButton: DebugElement;
        let themeTogglebutton: DebugElement;
        let menu: DebugElement;
        const serviceSetAppTheme = vi.spyOn(testThemeService, 'SetAppTheme');
        const close = vi.spyOn(component, 'close');
        mainButton = fixture.debugElement.query(By.css('.theme-toggle-main-btn'));
        themeTogglebutton = fixture.debugElement.query(By.css('.theme-toggle-btn:first-child'));
        menu = fixture.debugElement.query(By.css('.menu'));

        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(menu.nativeElement.classList.contains('open')).toBe(true);

        themeTogglebutton.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(serviceSetAppTheme).toHaveBeenCalledWith('indigo', 'system');
        expect(close).toHaveBeenCalled();
        expect(component.open).toBe(false);

        mainButton.triggerEventHandler('click', null);
        themeTogglebutton = fixture.debugElement.query(By.css('.theme-toggle-btn:nth-child(2)'));

        themeTogglebutton.triggerEventHandler('click', null);
        expect(serviceSetAppTheme).toHaveBeenCalledWith('indigo', 'light');
        expect(close).toHaveBeenCalled();
        expect(component.open).toBe(false);

        mainButton.triggerEventHandler('click', null);
        themeTogglebutton = fixture.debugElement.query(By.css('.theme-toggle-btn:nth-child(3)'));

        themeTogglebutton.triggerEventHandler('click', null);
        expect(serviceSetAppTheme).toHaveBeenCalledWith('indigo', 'dark');
        expect(close).toHaveBeenCalled();
        expect(component.open).toBe(false);
    });
});
