import {NgModule} from '@angular/core';
import {ProductState} from './product.state';
import {REMOVE_PRODUCT_COMMAND_PORT} from './ui/command/remove-product.command-port';
import {ADD_ONE_PRODUCT_COMMAND_PORT} from './ui/command/add-one-product.command-port';
import {GET_ONE_PRODUCT_QUERY_PORT} from './ui/query/get-one-product.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ProductState,
    {provide: REMOVE_PRODUCT_COMMAND_PORT, useExisting: ProductState},
    {provide: ADD_ONE_PRODUCT_COMMAND_PORT, useExisting: ProductState},
    {provide: GET_ONE_PRODUCT_QUERY_PORT, useExisting: ProductState},
  ],
  exports: []
})
export class ProductStateModule {
}
