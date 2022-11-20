import { NgModule } from '@angular/core';
import { DeleteOneProductHttpService } from './delete-one-product.http-service';
import { DELETE_ONE_PRODUCT_DTO_PORT } from '../../application/infrastructure/dto/delete-one-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [DeleteOneProductHttpService, { provide: DELETE_ONE_PRODUCT_DTO_PORT, useExisting: DeleteOneProductHttpService }],
  exports: []
})
export class DeleteOneProductHttpServiceModule {
}
