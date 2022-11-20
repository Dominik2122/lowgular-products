import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductDto} from "../dto/product.dto";

export const PRODUCTS_STORAGE_PORT = new InjectionToken<ProductsStoragePort>('PRODUCTS_STORAGE_PORT');

export interface ProductsStoragePort {
  set(products: ProductDto[]): void;

  selectProducts(): Observable<ProductDto[]>;
}
