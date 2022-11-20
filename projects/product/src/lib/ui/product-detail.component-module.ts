import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import {MatCardModule} from "@angular/material/card";
import {PushModule} from "@rx-angular/template";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    PushModule,
    CommonModule
  ],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
