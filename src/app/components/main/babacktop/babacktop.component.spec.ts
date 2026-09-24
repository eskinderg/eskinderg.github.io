import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ThemeService } from '../../../theme/theme.service';
import { BaBackTopComponent } from './babacktop.component';
import { LanguageService } from '../../../providers/language.service';
import { By } from '@angular/platform-browser';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { testLanguageService } from '../../../../test';

describe('BackTopComponent', () => {
    let component: BaBackTopComponent;
    let fixture: ComponentFixture<BaBackTopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BaBackTopComponent);
        component = fixture.componentInstance;
        component._selector = fixture.debugElement.queryAll(By.css('.ba-back-top'))[0].nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        // component._onClick();
        component.ngOnInit();
        expect(component).toBeTruthy();
    });

    it('click', () => {
        let mainButton: DebugElement;
        mainButton = fixture.debugElement.query(By.css('.ba-back-top'));
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        // const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        // colorBtns[1].triggerEventHandler('mouseover', null);
        // colorBtns[1].triggerEventHandler('click', null);
        // expect(component.open).toBe(false);
    });
});
