import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

declare const window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayCookieConsent = true;
  bodyClass = 'body';

  constructor(private translate: TranslateService, private router: Router) {
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

    this.router.events.subscribe((x: NavigationEnd) => {
      if (x.urlAfterRedirects) {
        if (x.urlAfterRedirects === '/home') {
          this.bodyClass = 'container';
        } else {
          this.bodyClass = 'body';
        }
      }
    });
  }

  onCookieConsentDismis() {
    localStorage.setItem('disable-cookie-consent', 'true');
    this.displayCookieConsent = false;
  }
}
