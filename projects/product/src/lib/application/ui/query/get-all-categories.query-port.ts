import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const GET_ALL_CATEGORIES_QUERY_PORT = new InjectionToken<GetAllCategoriesQueryPort>('GET_ALL_CATEGORIES_QUERY_PORT');

export interface GetAllCategoriesQueryPort {
  getAllCategories(): Observable<string[]>;
}
