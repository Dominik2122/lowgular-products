import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {
  AddOneProductHttpServiceModule,
  CategoriesListComponentModule,
  DeleteOneProductHttpServiceModule,
  GetAllCategoriesHttpServiceModule,
  GetAllProductsHttpServiceModule,
  ProductListComponentModule,
  ProductListViewStateModule,
  ProductListViewStorageModule,
  ProductSortingSelectComponentModule,
  ProductsStorageModule,
  ProductStateModule
} from '@product';
import {MainPage} from './main.page';
import {MaterialModule} from "../material.module";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    ProductListComponentModule,
    ProductStateModule,
    ProductListViewStateModule,
    AddOneProductHttpServiceModule,
    DeleteOneProductHttpServiceModule,
    ProductsStorageModule,
    GetAllProductsHttpServiceModule,
    GetAllCategoriesHttpServiceModule,
    MatCardModule,
    MaterialModule,
    ProductListViewStorageModule,
    ProductSortingSelectComponentModule,
    RouterLink,
    CategoriesListComponentModule
  ],
  declarations: [MainPage],
  providers: [],
  exports: [MainPage]
})
export class MainPageModule {
}
