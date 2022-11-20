import {InjectionToken} from '@angular/core';
import {RemoveProductCommand} from './remove-product.command';

export const REMOVE_PRODUCT_COMMAND_PORT = new InjectionToken<RemoveProductCommandPort>('REMOVE_PRODUCT_COMMAND_PORT');

export interface RemoveProductCommandPort {
  removeProduct(removeProductCommand: RemoveProductCommand): void;
}
