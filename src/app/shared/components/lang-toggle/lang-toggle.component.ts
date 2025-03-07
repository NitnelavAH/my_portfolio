import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { LangDefinition, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { IconPipe } from '../../pipes/icon.pipe';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-lang-toggle',
  imports: [
        TranslocoModule,
        IconPipe,
        NgClass
  ],
  templateUrl: './lang-toggle.component.html',
})
export class LangToggleComponent implements OnDestroy, OnInit {
  public availableLangs = signal<LangDefinition[]>([]);
  public dropdownOpen = signal(false);

  private service = inject(TranslocoService);
  private subscription: Subscription | null = null;
  private platform = inject(PLATFORM_ID);

  constructor(private translocoService: TranslocoService) {
    if (isPlatformBrowser(this.platform)) {
      this.setInitialLanguage();
    }
  }

  setInitialLanguage() {

    const browserLang = navigator.language.split('-')[0]; // only "es", "en", etc.
    const availableLangs = (this.service.getAvailableLangs() as LangDefinition[]).map((lang) => lang.id);
    const langToSet = availableLangs.includes(browserLang) ? browserLang : 'en';
    this.translocoService.setActiveLang(langToSet);

  }

  ngOnInit(): void {
    this.availableLangs.update(() => this.service.getAvailableLangs() as LangDefinition[]);
  }

  get activeLang() {
    return this.service.getActiveLang();
  }

  public changeLang(lang: string) {
    this.subscription?.unsubscribe();
    this.subscription = this.service
      .load(lang)
      .pipe(take(1))
      .subscribe(() => {
        this.service.setActiveLang(lang);
      });
    this.toggleDropdown();
  }

  public toggleDropdown() {
    this.dropdownOpen.update((value) => !value);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
