import { ChangeDetectionStrategy, Component, HostListener, Input }from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';
import { speedDialFabAnimations }from './speed-dial-fab.animations';

export interface FabButton {
  icon: string,
  tooltip: string
}

export enum SpeedDialFabPosition {
    Top    = 'top',
    Bottom = 'bottom',
    Left   = 'left',
    Right  = 'right'
}

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedDialFabComponent {

  @Input() reverseColumnDirection: boolean = false;
  @Input() fabButtons: FabButton[];

  public buttons = [];
  public fabTogglerState = 'inactive';
  public atTop = true;

  constructor(public themeService: ThemeService, public portfolio: LanguageService) { }

  private showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.themeService.Colors;
  }

  private hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  public onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  public onClickFab(btn: {icon: string, theme: string}) {
    this.hideItems();
    this.themeService.SetTheme(btn.theme, false)
  }

  public onToggleChange(event: MatSlideToggleChange) {
    this.hideItems();
    if(event.checked) {
      this.themeService.SetTheme('dark', true)
    }else {
      this.themeService.SetTheme(this.themeService.Theme, false)
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    if (scrollTop === 0) {
      this.atTop = true;
    } else {
      this.atTop = false;
    }
  }
}

