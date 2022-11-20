import { InjectionToken } from '@angular/core';
import {AddOneProductCommand} from "./add-one-product.command";
import {Observable} from "rxjs";

export const ADD_ONE_PRODUCT_COMMAND_PORT = new InjectionToken<AddOneProductCommandPort>('ADD_ONE_PRODUCT_COMMAND_PORT');

export interface AddOneProductCommandPort {
  addOneProduct(productData: AddOneProductCommand): Observable<void>;
}
