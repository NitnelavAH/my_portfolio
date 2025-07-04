import { Component, inject, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';
import { isPlatformBrowser } from '@angular/common';
import { SubSink } from 'subsink';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-nav-bar',
  imports: [
    TranslocoModule,
    LangToggleComponent
  ],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  private analytics = inject(Analytics);

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.subs.add(
        this.activateRoute.fragment.subscribe((fragment) => {
          if (!fragment) {
            this.scrollTop();
            return;
          }
          this.scrollToSection(fragment as string);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public eventResume() {
    const date = new Date().toISOString();
    if (isPlatformBrowser(this.platformId)) {
      logEvent(this.analytics, "resume_view", { date })
    }
  }

  public scrollTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  private scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
