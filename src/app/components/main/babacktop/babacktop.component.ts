import { Component, ViewChild, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-back-top',
  styleUrls: ['./baBackTop.scss'],
  template: `
  <i #baBackTop class="ba-back-top" title="Back to Top">
    <svg id="svg-backTo-top" width="30" viewBox="0 0 307.054 307.054">
      <path style="fill:#FFFFFF" d="M302.445,205.788L164.63,67.959c-6.136-6.13-16.074-6.13-22.203,0L4.597,205.788c-6.129,6.132-6.129,16.069,0,22.201
      l11.101,11.101c6.129,6.136,16.076,6.136,22.209,0l115.62-115.626L269.151,239.09c6.128,6.136,16.07,6.136,22.201,0
      l11.101-11.101C308.589,221.85,308.589,211.92,302.445,205.788z"/>
    </svg>
    </i>
  `
})
export class BaBackTopComponent implements AfterViewInit {

  @Input() position = 400;
  @Input() showSpeed = 500;
  @Input() moveSpeed = 700;

  @ViewChild('baBackTop') _selector: ElementRef;
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngAfterViewInit(): void {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
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
