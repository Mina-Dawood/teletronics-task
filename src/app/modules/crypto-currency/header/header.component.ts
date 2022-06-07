import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'teletronics-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() buttonText!: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
