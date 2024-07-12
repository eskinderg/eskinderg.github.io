import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownMenuComponent } from './dropdown.component';

describe('DropdownComponent', () => {
    let component: DropDownMenuComponent;
    let fixture: ComponentFixture<DropDownMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropDownMenuComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(DropDownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});