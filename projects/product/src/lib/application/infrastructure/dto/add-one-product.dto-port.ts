import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductDto} from './product.dto';

export const ADD_ONE_PRODUCT_DTO_PORT = new InjectionToken<AddOneProductDtoPort>('ADD_ONE_PRODUCT_DTO_PORT');

export interface AddOneProductDtoPort {
  addOneProduct(productData: Omit<ProductDto, 'id' | 'image' | 'category'>): Observable<ProductDto>;
}
