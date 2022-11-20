import { NgModule } from '@angular/core';
import { ProductsStorage } from './products.storage';
import { PRODUCTS_STORAGE_PORT } from '../../application/infrastructure/storage/products.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductsStorage, { provide: PRODUCTS_STORAGE_PORT, useExisting: ProductsStorage }],
  exports: []
})
export class ProductsStorageModule {
}
