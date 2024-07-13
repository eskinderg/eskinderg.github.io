import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropDownComponent } from './langdropdown.component';

describe('LangdropdownComponent', () => {
    let component: LanguageDropDownComponent;
    let fixture: ComponentFixture<LanguageDropDownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({}).compileComponents();

        fixture = TestBed.createComponent(LanguageDropDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
