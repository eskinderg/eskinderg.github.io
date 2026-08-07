import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { ToggleComponent } from '../../app/toggle/toggle.component';
import { LanguageDropDownComponent } from '../../app/langdropdown/langdropdown.component';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrl: './right.component.scss',
    imports: [ToggleComponent, ColorPickerComponent, LanguageDropDownComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightComponent {
    toggleComponent = viewChild.required<ToggleComponent>('toggle');
    langSelectComponent = viewChild.required<LanguageDropDownComponent>('lang-select');
}
