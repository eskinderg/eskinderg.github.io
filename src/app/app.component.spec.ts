import { HttpClientModule } from '@angular/common/http';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './providers/language.service';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        LanguageService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('renders language select', () => {
    const langSelect = findComponent(fixture, 'app-langselect');
    expect(langSelect).toBeTruthy();
  });

  it('renders speed dial button component', () => {
    const speedDial = findComponent(fixture, 'app-speed-dial-fab');
    expect(speedDial).toBeTruthy();
  });

  it('renders app menu', () => {
    const menu = findComponent(fixture, 'app-menu');
    expect(menu).toBeTruthy();
  });

  it('renders outline menu', () => {
    const outline = findComponent(fixture, 'app-outline');
    expect(outline).toBeTruthy();
  });

  it('renders intro section', () => {
    const intro = findComponent(fixture, 'app-intro');
    expect(intro).toBeTruthy();
  });

  it('Should trigger theme change', () => {

    //Arrange
    spyOn(component, 'onSpeedDialFabClicked');
    const color = { 'theme': 'red', 'icon': null };
    const speedDial = findComponent(fixture, 'app-speed-dial-fab');

    //Act
    speedDial.triggerEventHandler('fabClick', color);

    //Assert
    expect(component.onSpeedDialFabClicked).toHaveBeenCalledWith({ 'theme': 'red', 'icon': null });
  });

  it('Should set app theme and set localStorage', () => {

    //Arrange
    const theme = "red";
    spyOn(localStorage, 'setItem');

    //Act
    component.onSpeedDialFabClicked({ 'theme': theme, 'icon': null });

    //Assert
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', theme);
    expect(component.selectedTheme).toEqual(theme);
  });

});

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}
