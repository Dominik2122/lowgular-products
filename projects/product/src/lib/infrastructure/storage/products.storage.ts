import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {ProductsStoragePort} from '../../application/infrastructure/storage/products.storage-port';
import {ProductDto} from "../../application/infrastructure/dto/product.dto";

@Injectable()
export class ProductsStorage implements ProductsStoragePort {
  private _productsSubject = new ReplaySubject<ProductDto[]>(1);
  public products$: Observable<ProductDto[]> = this._productsSubject.asObservable();

  set(products: ProductDto[]): void {
    this._productsSubject.next(products)
  }

  selectProducts(): Observable<ProductDto[]> {
    return this.products$
  }
}
