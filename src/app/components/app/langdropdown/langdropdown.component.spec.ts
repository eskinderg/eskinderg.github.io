import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropDownComponent } from './langdropdown.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('LangdropdownComponent', () => {
    let component: LanguageDropDownComponent;
    let fixture: ComponentFixture<LanguageDropDownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LanguageDropDownComponent],
            imports: [MatTooltipModule],
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
});
