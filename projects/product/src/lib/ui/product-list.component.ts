import {ChangeDetectionStrategy, Component, Inject, NgZone, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductQuery} from '../application/ui/query/product.query';
import {
  GET_ALL_PRODUCTS_QUERY_PORT,
  GetAllProductsQueryPort
} from '../application/ui/query/get-all-products.query-port';
import {
  REMOVE_PRODUCT_COMMAND_PORT,
  RemoveProductCommandPort
} from '../application/ui/command/remove-product.command-port';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly productsList$: Observable<ProductQuery[]> = this._getAllProductsQueryPort.getAllProducts();

  constructor(
    @Inject(GET_ALL_PRODUCTS_QUERY_PORT) private _getAllProductsQueryPort: GetAllProductsQueryPort,
    @Inject(REMOVE_PRODUCT_COMMAND_PORT) private _removeProductCommandPort: RemoveProductCommandPort,
    private readonly _router: Router,
    private readonly _ngZone: NgZone
  ) {
  }

  removeProduct(id: number): void {
    this._removeProductCommandPort.removeProduct({id})
  }

  navigateToDetails(id: number): void {
    this._ngZone.run(() => {
      this._router.navigate(['product', id])
    })
  }
}
