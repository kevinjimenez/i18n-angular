import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  public lenguageService = inject(LanguageService);
  public currentLang = this.lenguageService.currentLang;

  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  public changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    console.log(`Language changed to ${lang}`);

    this.lenguageService.changeLang(lang);
  }
}
