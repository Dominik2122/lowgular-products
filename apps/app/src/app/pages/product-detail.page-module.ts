import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {
  AddOneProductHttpServiceModule,
  GetAllProductsHttpServiceModule,
  ProductDetailComponentModule,
  ProductStateModule,
  ProductsStorageModule
} from '@product';
import {ProductDetailPage} from './product-detail.page';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ProductDetailComponentModule, CommonModule, RouterModule, ProductStateModule, GetAllProductsHttpServiceModule, ProductsStorageModule, AddOneProductHttpServiceModule, MatCardModule, MatButtonModule],
  declarations: [ProductDetailPage],
  providers: [],
  exports: [ProductDetailPage]
})
export class ProductDetailPageModule {
}
