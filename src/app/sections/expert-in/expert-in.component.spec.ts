import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertInComponent } from './expert-in.component';

describe('ExpertInComponent', () => {
  let component: ExpertInComponent;
  let fixture: ComponentFixture<ExpertInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
