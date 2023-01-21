import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';

import { ExpertInComponent } from './expert-in.component';

describe('ExpertInComponent', () => {
  let component: ExpertInComponent;
  let fixture: ComponentFixture<ExpertInComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(ExpertInComponent, {
      set: {
        providers: [LanguageService],
        imports: [HttpClientModule],
        schemas: [NO_ERRORS_SCHEMA]
      }
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
