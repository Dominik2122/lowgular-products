import { NgModule } from '@angular/core';
import { GetAllProductsHttpService } from './get-all-products.http-service';
import { GET_ALL_PRODUCTS_DTO_PORT } from '../../application/infrastructure/dto/get-all-products.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [GetAllProductsHttpService, { provide: GET_ALL_PRODUCTS_DTO_PORT, useExisting: GetAllProductsHttpService }],
  exports: []
})
export class GetAllProductsHttpServiceModule {
}
