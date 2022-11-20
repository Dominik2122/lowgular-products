import {InjectionToken} from '@angular/core';
import {SortProductsCommand} from "./sort-products.command";

export const SORT_PRODUCTS_COMMAND_PORT = new InjectionToken<SortProductsCommandPort>('SORT_PRODUCTS_COMMAND_PORT');

export interface SortProductsCommandPort {
  sortProducts(method: SortProductsCommand): void;
}
