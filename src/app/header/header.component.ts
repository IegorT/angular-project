import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selected = new EventEmitter<string>();

    onSelect(data: string) {
        this.selected.emit(data);
    }
}