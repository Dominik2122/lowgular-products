import {NgModule} from '@angular/core';
import {ProductListViewState} from './product-list-view.state';
import {SORT_PRODUCTS_COMMAND_PORT} from './ui/command/sort-products.command-port';
import {FILTER_PRODUCTS_COMMAND_PORT} from './ui/command/filter-products.command-port';
import {GET_ALL_CATEGORIES_QUERY_PORT} from './ui/query/get-all-categories.query-port';
import {GET_ALL_PRODUCTS_QUERY_PORT} from './ui/query/get-all-products.query-port';
import {GET_ALL_SORTING_OPTIONS_QUERY_PORT} from "./ui/query/get-all-sorting-options.query-port";
import {DescByPriceSortOptionDomain} from "./domain/desc-by-price-sort-option.domain";
import {DescByTitleSortOptionDomain} from "./domain/desc-by-title-sort-option.domain";
import {AscByTitleSortOptionDomain} from "./domain/asc-by-title-sort-option.domain";
import {AscByPriceSortOptionDomain} from "./domain/asc-by-price-sort-option.domain";

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ProductListViewState,
    {provide: SORT_PRODUCTS_COMMAND_PORT, useExisting: ProductListViewState},
    {provide: FILTER_PRODUCTS_COMMAND_PORT, useExisting: ProductListViewState},
    {provide: GET_ALL_CATEGORIES_QUERY_PORT, useExisting: ProductListViewState},
    {provide: GET_ALL_PRODUCTS_QUERY_PORT, useExisting: ProductListViewState},
    {provide: GET_ALL_SORTING_OPTIONS_QUERY_PORT, useClass: DescByPriceSortOptionDomain, multi: true},
    {provide: GET_ALL_SORTING_OPTIONS_QUERY_PORT, useClass: DescByTitleSortOptionDomain, multi: true},
    {provide: GET_ALL_SORTING_OPTIONS_QUERY_PORT, useClass: AscByTitleSortOptionDomain, multi: true},
    {provide: GET_ALL_SORTING_OPTIONS_QUERY_PORT, useClass: AscByPriceSortOptionDomain, multi: true},
  ],
  exports: []
})
export class ProductListViewStateModule {
}
