import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddOneProductDtoPort} from '../../application/infrastructure/dto/add-one-product.dto-port';
import {ProductDto} from '../../application/infrastructure/dto/product.dto';
import {ProductHttpResponse} from "./response/product.http-response";

@Injectable()
export class AddOneProductHttpService implements AddOneProductDtoPort {
  constructor(private _httpClient: HttpClient) {
  }

  addOneProduct(productData: Omit<ProductDto, 'id' | 'image' | 'category'>): Observable<ProductDto> {
    return this._httpClient.post<ProductHttpResponse>('products', productData)
  }
}
