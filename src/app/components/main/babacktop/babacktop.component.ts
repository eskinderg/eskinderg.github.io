import { Component, ViewChild, HostListener, Input, ElementRef } from '@angular/core';

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
export class BaBackTopComponent {

  @Input() position = 400;
  @Input() showSpeed = 500;
  @Input() moveSpeed = 700;

  @ViewChild('baBackTop') _selector: ElementRef;

  @HostListener('click', ['$event.target'])
  _onClick() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    this._selector.nativeElement.style.display = window.scrollY > this.position ? 'block' : 'none'
  }
}
