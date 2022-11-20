import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const GET_ALL_CATEGORIES_DTO_PORT = new InjectionToken<GetAllCategoriesDtoPort>('GET_ALL_CATEGORIES_DTO_PORT');

export interface GetAllCategoriesDtoPort {
  getAllCategories(): Observable<string[]>;
}
