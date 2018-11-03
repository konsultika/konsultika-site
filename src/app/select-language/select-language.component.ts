import { Component, OnInit, LOCALE_ID, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export interface Locale {
  lang: string;
  name: string;
}
export const locales: Locale[] = [
  {
    lang: 'en',
    name: 'English',
  },
  {
    lang: 'no',
    name: 'Norsk'
  }
];

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  locales = [];
  currentLocale: Locale;
  selectLocale: Locale;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.locales = locales;
    this.updateSelectLocale();
  }

  setLanguage() {
    this.translate.use(this.selectLocale.lang);
    this.updateSelectLocale();
  }

  private updateSelectLocale() {
    const currentLang = this.translate.currentLang;
    this.selectLocale = locales.find(x => x.lang !== currentLang);
  }
}
