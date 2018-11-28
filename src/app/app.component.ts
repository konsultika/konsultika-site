import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare const window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayCookieConsent = true;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');

    const host = window.location.host;

    if (host.includes('.no') || host.includes('localhost')) {
      this.translate.use('no');
    } else {
      this.translate.use('en');
    }

    const cookieConsent = localStorage.getItem('disable-cookie-consent');
    this.displayCookieConsent = !cookieConsent || cookieConsent !== 'true';
  }

  onCookieConsentDismis() {
    localStorage.setItem('disable-cookie-consent', 'true');
    this.displayCookieConsent = false;
  }
}
