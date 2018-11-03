import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  intro: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.translateAll();

    this.translate.onLangChange.subscribe(() => {
      this.translateAll();
    });

  }

  private translateAll() {
    this.translate.get('intro').subscribe((text: string) => {
      this.intro = this.sanitizer.bypassSecurityTrustHtml(text);
    });
  }

}
