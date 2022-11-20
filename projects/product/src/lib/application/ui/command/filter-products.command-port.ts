import {InjectionToken} from '@angular/core';
import {FilterProductsCommand} from "./filter-products.command";

export const FILTER_PRODUCTS_COMMAND_PORT = new InjectionToken<FilterProductsCommandPort>('FILTER_PRODUCTS_COMMAND_PORT');

export interface FilterProductsCommandPort {
  filterProducts(command: FilterProductsCommand): void
}
