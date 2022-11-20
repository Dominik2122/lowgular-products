import { NgModule } from '@angular/core';
import { GetAllCategoriesHttpService } from './get-all-categories.http-service';
import { GET_ALL_CATEGORIES_DTO_PORT } from '../../application/infrastructure/dto/get-all-categories.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [GetAllCategoriesHttpService,
    { provide: GET_ALL_CATEGORIES_DTO_PORT, useExisting: GetAllCategoriesHttpService }],
  exports: []
})
export class GetAllCategoriesHttpServiceModule {
}
