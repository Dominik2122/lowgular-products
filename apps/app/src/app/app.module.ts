import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {AppEnvironmentService} from "../environments/environment";
import {EnvironmentService, HttpUrlInterceptor} from "@shared";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    {provide: EnvironmentService, useClass: AppEnvironmentService},
    {provide: HTTP_INTERCEPTORS, useClass: HttpUrlInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
