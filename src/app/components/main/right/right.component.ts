import { Component, viewChild } from '@angular/core';
import { ToggleComponent } from '../../app/toggle/toggle.component';
import { LanguageDropDownComponent } from '../../app/langdropdown/langdropdown.component';

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrl: './right.component.scss'
})
export class RightComponent {
    toggleComponent = viewChild.required<ToggleComponent>('toggle');
    langSelectComponent = viewChild.required<LanguageDropDownComponent>('lang-select');
}
