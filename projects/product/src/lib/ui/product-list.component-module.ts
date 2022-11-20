import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProductListComponent} from './product-list.component';
import {PushModule} from "@rx-angular/template";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    MatProgressSpinnerModule,
    PushModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
