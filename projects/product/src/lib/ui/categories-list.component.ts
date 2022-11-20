import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {
  GET_ALL_CATEGORIES_QUERY_PORT,
  GetAllCategoriesQueryPort
} from '../application/ui/query/get-all-categories.query-port';
import {
  FILTER_PRODUCTS_COMMAND_PORT,
  FilterProductsCommandPort
} from '../application/ui/command/filter-products.command-port';

@Component({
  selector: 'lib-categories-list',
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  categories$ = this._getAllCategoriesQueryPort.getAllCategories()

  constructor(
    @Inject(GET_ALL_CATEGORIES_QUERY_PORT) private _getAllCategoriesQueryPort: GetAllCategoriesQueryPort,
    @Inject(FILTER_PRODUCTS_COMMAND_PORT) private _filterProductsCommandPort: FilterProductsCommandPort) {
  }

  filterByCategory(categoryName: string | null): void {
    this._filterProductsCommandPort.filterProducts({category: categoryName})
  }

}
