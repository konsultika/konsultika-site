import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd, RouterOutlet } from '@angular/router';
import { trigger, transition, group, query, style, animate, animateChild } from '@angular/animations';

declare const window;

// style({ position: 'relative' }),
// query(':enter, :leave', [
//   style({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%'
//   })
// ]),
// query(':enter', [
//   style({ left: '-100%'})
// ]),
// query(':leave', animateChild()),
// group([
//   query(':leave', [
//     animate('300ms ease-out', style({ left: '100%'}))
//   ]),
//   query(':enter', [
//     animate('300ms ease-out', style({ left: '0%'}))
//   ])
// ]),
// query(':enter', animateChild()),

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          style({ left: '-100%' }),
          query(
            ':enter',
            [
              style({
                opacity: 0,
                left: '-100%'
              }),
              animate(
                '300ms ease-out',
                style({
                  opacity: 1,
                  left: '0%',
                })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('300ms ease-out',
              style(
                {
                  left: '100%',
                  opacity: 0
                }
              )), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
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

  getPage(outlet: RouterOutlet) {
    return outlet.activatedRouteData['page'] || 'home';
  }
}
