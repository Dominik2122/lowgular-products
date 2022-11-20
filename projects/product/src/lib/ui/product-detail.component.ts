import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {GET_ONE_PRODUCT_QUERY_PORT, GetOneProductQueryPort} from '../application/ui/query/get-one-product.query-port';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  product$ = this._activatedRoute.params.pipe(
    switchMap((params) => {
      return this._getOneProductQueryPort.getOneProduct(Number(params['productId']))
    })
  )

  constructor(
    @Inject(GET_ONE_PRODUCT_QUERY_PORT) private _getOneProductQueryPort: GetOneProductQueryPort,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }
}
