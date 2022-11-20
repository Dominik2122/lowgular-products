import { NgModule } from '@angular/core';
import { ProductListViewStorage } from './product-list-view.storage';
import { PRODUCT_LIST_VIEW_STORAGE_PORT } from '../../application/infrastructure/storage/product-list-view.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductListViewStorage,
    { provide: PRODUCT_LIST_VIEW_STORAGE_PORT, useExisting: ProductListViewStorage }],
  exports: []
})
export class ProductListViewStorageModule {
}
