import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, RequestOptions,ConnectionBackend } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from "@angular/router";

import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import { Ng2CompleterModule } from "ng2-completer";

import { AuthHttp, AuthConfig } from 'angular2-jwt';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    /*
        headerName: 'Authorization',
        headerPrefix: 'bearer',
        tokenGetter: (() => localStorage.getItem(this.tokenName)),
        */
  }), http, options);
}
@NgModule({
    declarations: [
      AppComponent,

    ],
    imports: [
      AlertModule.forRoot(),
  	  BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      DatepickerModule.forRoot(),
      Ng2CompleterModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpModule,
      HttpClientModule
    ],
    bootstrap: [AppComponent],
    providers: [
      {
       provide: AuthHttp,
       useFactory: authHttpServiceFactory,
       deps: [ Http, RequestOptions ]
     }
    ]

})
export class AppModule {}
