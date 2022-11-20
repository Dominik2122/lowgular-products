import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '@shared';
import {GetAllProductsDtoPort} from '../../application/infrastructure/dto/get-all-products.dto-port';
import {ProductDto} from '../../application/infrastructure/dto/product.dto';
import {ProductHttpResponse} from "./response/product.http-response";

@Injectable()
export class GetAllProductsHttpService implements GetAllProductsDtoPort {
  constructor(
    private _httpClient: HttpClient,
    private _environmentService: EnvironmentService
  ) {
  }

  getAllProducts(): Observable<ProductDto[]> {
    return this._httpClient.get<ProductHttpResponse[]>('products')
  }
}
