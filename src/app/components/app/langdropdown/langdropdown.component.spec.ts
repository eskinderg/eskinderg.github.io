import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropDownComponent } from './langdropdown.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { By } from '@angular/platform-browser';
import { TooltipModule } from '../tooltip/tooltip.module';

describe('LangdropdownComponent', () => {
    let component: LanguageDropDownComponent;
    let fixture: ComponentFixture<LanguageDropDownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LanguageDropDownComponent],
            imports: [TooltipModule],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageDropDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render two languages of English and Amhric', () => {
        expect(component).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.langMenuItem')).length).toEqual(2);
        expect(fixture.debugElement.queryAll(By.css('.langMenuItem'))[0].nativeElement.textContent).toBe(
            ' English '
        );
        expect(fixture.debugElement.queryAll(By.css('.langMenuItem'))[1].nativeElement.textContent).toBe(
            ' አማርኛ '
        );
    });
});
