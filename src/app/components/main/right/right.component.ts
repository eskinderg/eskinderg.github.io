import { Component, viewChild } from '@angular/core';
import { ToggleComponent } from '../../app/toggle/toggle.component';
import { LangSelectComponent } from '../../app/langselect/langselect';

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrl: './right.component.scss'
})
export class RightComponent {
    toggleComponent = viewChild.required<ToggleComponent>('toggle');
    langSelectComponent = viewChild.required<LangSelectComponent>('lang-select');
}
