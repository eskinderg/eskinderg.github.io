import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { ToggleComponent } from '../../app/toggle/toggle.component';
import { LanguageDropDownComponent } from '../../app/langdropdown/langdropdown.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrl: './right.component.scss',
    standalone: true,
    imports: [ToggleComponent, MenuComponent, LanguageDropDownComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightComponent {
    toggleComponent = viewChild.required<ToggleComponent>('toggle');
    langSelectComponent = viewChild.required<LanguageDropDownComponent>('lang-select');
}
