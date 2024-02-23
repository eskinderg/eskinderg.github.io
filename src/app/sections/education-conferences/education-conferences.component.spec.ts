import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';
import { EducationConferencesSectionComponent } from './education-conferences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from 'src/app/app.module';

describe('EducationConferencesSectionComponent', () => {
  let component: EducationConferencesSectionComponent;
  let fixture: ComponentFixture<EducationConferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationConferencesSectionComponent],
      providers: [LanguageService, ThemeService],
      imports: [HttpClientModule, AppModule, BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationConferencesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
