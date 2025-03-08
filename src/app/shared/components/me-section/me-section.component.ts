import { Component } from '@angular/core';
import { IconPipe } from '../../pipes/icon.pipe';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-me-section',
  imports: [
    IconPipe,
    TranslocoModule
  ],
  templateUrl: './me-section.component.html',
  styleUrl: './me-section.component.scss'
})
export class MeSectionComponent {

}
