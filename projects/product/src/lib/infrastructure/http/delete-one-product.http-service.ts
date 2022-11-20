import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {DeleteOneProductDtoPort} from '../../application/infrastructure/dto/delete-one-product.dto-port';

@Injectable()
export class DeleteOneProductHttpService implements DeleteOneProductDtoPort {
  constructor(private _httpClient: HttpClient) {
  }

  deleteOneProduct(id: number): Observable<void> {
    // return this._httpClient.delete(undefined, undefined);
    return EMPTY
  }
}
