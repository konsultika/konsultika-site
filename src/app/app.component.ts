import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
  }
}
