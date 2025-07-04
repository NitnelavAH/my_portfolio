import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private analytics = inject(Analytics);

    private platform = inject(PLATFORM_ID);


    ngOnInit(): void {
        if (isPlatformBrowser(this.platform)) {
            const date = new Date().toISOString();
            logEvent(this.analytics, "visitor_detected", {date})
        }
    }
}
