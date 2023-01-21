import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output }from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
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
  standalone: true,
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SpeedDialFabComponent {

  @Input() reverseColumnDirection: boolean = false;
  @Input() fabButtons: FabButton[];
  @Output() fabClick = new EventEmitter();

  public buttons = [];
  public fabTogglerState = 'inactive';
  public atTop = true;

  constructor(public themeService: ThemeService) { }

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

  public onClickFab(btn: {icon: string}) {
    this.hideItems();
    this.fabClick.emit(btn);
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

