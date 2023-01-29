import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

import { EducationConferencesComponent } from './education-conferences.component';

describe('EducationConferencesComponent', () => {
  let component: EducationConferencesComponent;
  let fixture: ComponentFixture<EducationConferencesComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(EducationConferencesComponent, {
      set: {
        providers: [LanguageService, ThemeService],
        imports: [HttpClientModule ],
        schemas: [NO_ERRORS_SCHEMA]
      }
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
