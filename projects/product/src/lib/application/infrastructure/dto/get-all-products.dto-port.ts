import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from './product.dto';

export const GET_ALL_PRODUCTS_DTO_PORT = new InjectionToken<GetAllProductsDtoPort>('GET_ALL_PRODUCTS_DTO_PORT');

export interface GetAllProductsDtoPort {
  getAllProducts(): Observable<ProductDto[]>;
}
