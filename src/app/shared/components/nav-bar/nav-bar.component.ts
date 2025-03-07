import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    TranslocoModule,
    LangToggleComponent
  ],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

}
