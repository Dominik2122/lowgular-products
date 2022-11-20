import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetAllCategoriesDtoPort} from '../../application/infrastructure/dto/get-all-categories.dto-port';

@Injectable()
export class GetAllCategoriesHttpService implements GetAllCategoriesDtoPort {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('products/categories');
  }
}
