import {InjectionToken} from '@angular/core';
import {Observable} from "rxjs";
import {ProductListViewStorageData} from "./product-list-view.storage-data";

export const PRODUCT_LIST_VIEW_STORAGE_PORT = new InjectionToken<ProductListViewStoragePort>('PRODUCT_LIST_VIEW_STORAGE_PORT');

export interface ProductListViewStoragePort {
  set(data: ProductListViewStorageData): void;

  selectListView(): Observable<ProductListViewStorageData>;
}
