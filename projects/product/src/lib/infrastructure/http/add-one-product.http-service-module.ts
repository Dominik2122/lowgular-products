import { NgModule } from '@angular/core';
import { AddOneProductHttpService } from './add-one-product.http-service';
import { ADD_ONE_PRODUCT_DTO_PORT } from '../../application/infrastructure/dto/add-one-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [AddOneProductHttpService, { provide: ADD_ONE_PRODUCT_DTO_PORT, useExisting: AddOneProductHttpService }],
  exports: []
})
export class AddOneProductHttpServiceModule {
}
