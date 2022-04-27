import { Component, ViewChild, HostListener, Input, ElementRef, AfterViewInit } from '@angular/core';
// import { MatMenuTrigger } from '@angular/material';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-back-top',
  styleUrls: ['./baBackTop.scss'],
  template: `
  <i #baBackTop class="ba-back-top" title="Back to Top">
  <svg id="svg" width="30"  viewBox="0, 0, 400,274.0467404674047">
    <g id="svgg"><path id="path0" d="M196.630 0.991 C 190.393 2.082,195.940 -3.194,96.330 96.372 C 8.613 184.050,3.900 188.848,2.456 191.959 C -0.251 197.786,0.031 204.905,3.179 210.241 C 5.257 213.764,62.282 270.285,65.245 271.759 C 68.773 273.514,73.438 274.255,76.915 273.612 C 83.796 272.340,79.804 276.006,142.558 213.337 L 200.246 155.729 257.934 213.337 C 320.688 276.006,316.696 272.340,323.577 273.612 C 327.054 274.255,331.719 273.514,335.247 271.759 C 338.210 270.285,395.235 213.764,397.313 210.241 C 400.357 205.082,400.718 197.981,398.227 192.254 C 396.868 189.129,218.542 9.510,211.916 4.592 C 207.655 1.429,201.892 0.072,196.630 0.991 " stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path></g>
  </svg>
  </i>
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
