import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';
import { ExpertInSectionComponent } from './expert-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from 'src/app/app.module';

describe('ExpertInSectionComponent', () => {
  let component: ExpertInSectionComponent;
  let fixture: ComponentFixture<ExpertInSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpertInSectionComponent],
      providers: [LanguageService, ThemeService],
      imports: [HttpClientModule, AppModule, BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
