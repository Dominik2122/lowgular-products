import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPage } from './pages/main.page';
import { AddProductPage } from './pages/add-product.page';
import { ProductDetailPage } from './pages/product-detail.page';
import { MainPageModule } from './pages/main.page-module';
import { AddProductPageModule } from './pages/add-product.page-module';
import { ProductDetailPageModule } from './pages/product-detail.page-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MainPage },
      { path: 'addProduct', component: AddProductPage },
      { path: 'product/:productId', component: ProductDetailPage }
    ]),
    MainPageModule,
    AddProductPageModule,
    ProductDetailPageModule
  ],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
