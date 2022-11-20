import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {GET_ALL_SORTING_OPTIONS_QUERY_PORT} from '../application/ui/query/get-all-sorting-options.query-port';
import {SortOptionDomain} from '../application/domain/sort-option.domain';
import {
  SORT_PRODUCTS_COMMAND_PORT,
  SortProductsCommandPort
} from '../application/ui/command/sort-products.command-port';

@Component({
  selector: 'lib-product-sorting-select',
  templateUrl: './product-sorting-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSortingSelectComponent {

  constructor(
    @Inject(GET_ALL_SORTING_OPTIONS_QUERY_PORT) readonly sortOptionDomains: SortOptionDomain[],
    @Inject(SORT_PRODUCTS_COMMAND_PORT) private _sortProductsCommandPort: SortProductsCommandPort
  ) {
  }

  onSelectSortOptionChanged(selectedOption: SortOptionDomain | null): void {
    this._sortProductsCommandPort.sortProducts({sortingMethod: selectedOption?.sortingMethod ?? null})
  }
}
