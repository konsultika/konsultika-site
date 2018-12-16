import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { MenuComponent } from './menu/menu.component';
import { HamburgerComponent } from './menu/hamburger/hamburger.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { CookiesComponent } from './cookies/cookies.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { page: 'home' } },
  { path: 'contact', component: ContactComponent, data: { page: 'contact' } },
  { path: 'services', component: ServicesComponent, data: { page: 'services' } },
  { path: 'customers', component: CustomersComponent, data: { page: 'customers' } },
  { path: 'cookies', component: CookiesComponent, data: { page: 'cookies' } }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    MenuComponent,
    HamburgerComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    CustomersComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
