import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product.query';

export const GET_ALL_PRODUCTS_QUERY_PORT = new InjectionToken<GetAllProductsQueryPort>('GET_ALL_PRODUCTS_QUERY_PORT');

export interface GetAllProductsQueryPort {
  getAllProducts(): Observable<ProductQuery[]>;
}
