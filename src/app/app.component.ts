import { Component, Inject, inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import {
  LanguageService,
  SERVER_LANG_TOKEN,
} from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public cookie = inject(SsrCookieService);
  public languageService = inject(LanguageService);

  title = 'i18n-app';

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    public langServer: string
  ) {
    const lang =
      langServer ??
      (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');
    console.log({ langServer });

    console.log({ lang });

    this.languageService.changeLang(lang);
  }
}
