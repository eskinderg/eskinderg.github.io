import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationConferencesComponent } from './education-conferences.component';

describe('EducationConferencesComponent', () => {
  let component: EducationConferencesComponent;
  let fixture: ComponentFixture<EducationConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationConferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
