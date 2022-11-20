import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const DELETE_ONE_PRODUCT_DTO_PORT = new InjectionToken<DeleteOneProductDtoPort>('DELETE_ONE_PRODUCT_DTO_PORT');

export interface DeleteOneProductDtoPort {
  deleteOneProduct(id: number): Observable<void>;
}
