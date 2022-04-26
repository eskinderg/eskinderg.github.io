import { Component, ViewChild, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
// import { MatMenuTrigger } from '@angular/material';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-back-top',
  styleUrls: ['./baBackTop.scss'],
  template: `
    <i #baBackTop class="ba-back-top" title="Back to Top"></i>
  `
})
export class BaBackTopComponent implements AfterViewInit {

  @Input() position  = 400;
  @Input() showSpeed = 500;
  @Input() moveSpeed = 700;

  @ViewChild('baBackTop') _selector: ElementRef;
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngAfterViewInit (): void {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    jQuery('html, body').animate({scrollTop: 0}, {duration: this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }

  // <button mat-icon-button [matMenuTriggerFor]="appMenu">
  //   <mat-icon>more_vert</mat-icon>
  // </button>
  // <mat-menu #appMenu="matMenu">
  //   <button mat-menu-item>Settings</button>
  //   <button mat-menu-item>Help</button>
  // </mat-menu>


  // @HostListener('mouseover')
  // _onHover(): boolean {
  //   this.trigger.openMenu();
  //   return false;
  // }

  // @HostListener('mouseout')
  // _onMouseOut(): boolean {
  //   this.trigger.closeMenu();
  //   return false;
  // }

}
