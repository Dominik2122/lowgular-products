import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GetAllProductsDtoPort} from "../../../src/lib/application/infrastructure/dto/get-all-products.dto-port";
import {ProductDto} from "../../../src/lib/application/infrastructure/dto/product.dto";

export const productsDTO = [
  {id: 1, title: 'ABCD', price: 123, category: 'food'},
  {id: 2, title: 'BCDE', price: 122, category: 'jewelery'},
  {id: 3, title: 'FGH', price: 31, category: 'food'},
  {id: 4, title: 'IJKL', price: 433, category: 'candies'},
] as unknown as ProductDto[]


@Injectable()
export class MockGetAllProductsService implements GetAllProductsDtoPort {
  getAllProducts(): Observable<ProductDto[]> {
    return of(productsDTO)
  }
}
