import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product.query';

export const GET_ONE_PRODUCT_QUERY_PORT = new InjectionToken<GetOneProductQueryPort>('GET_ONE_PRODUCT_QUERY_PORT');

export interface GetOneProductQueryPort {
  getOneProduct(id: number): Observable<ProductQuery | undefined>;
}
