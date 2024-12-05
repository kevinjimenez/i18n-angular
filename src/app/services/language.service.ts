import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
); // no igual  noombre de la const x fines educativos se coloca

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly cookie = inject(SsrCookieService);
  private readonly translateService = inject(TranslateService);

  langServer = inject(SERVER_LANG_TOKEN, { optional: true });
  public currentLang = signal(this.langServer ?? 'en');

  changeLang(lang: string) {
    this.cookie.set('lang', lang);

    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);

    this.currentLang.set(lang);
  }
}
