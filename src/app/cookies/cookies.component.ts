import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  body: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.translate.get('cookieConsentBody').subscribe((text: string) => {
      this.body = this.sanitizer.bypassSecurityTrustHtml(text);
    });
  }

}
