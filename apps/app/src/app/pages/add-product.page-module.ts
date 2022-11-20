import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {
  AddOneProductHttpServiceModule,
  GetAllProductsHttpServiceModule,
  ProductStateModule,
  ProductsStorageModule,
  AddProductFormComponentModule
} from '@product';
import {MaterialModule} from '../material.module';
import {AddProductPage} from './add-product.page';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MaterialModule, RouterLink, AddProductFormComponentModule, ProductStateModule, GetAllProductsHttpServiceModule, ProductsStorageModule, AddOneProductHttpServiceModule],
  declarations: [AddProductPage],
  providers: [],
  exports: [AddProductPage]
})
export class AddProductPageModule {
}
