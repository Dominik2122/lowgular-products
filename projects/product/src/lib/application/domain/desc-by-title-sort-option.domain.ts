import {SortOptionDomain} from "./sort-option.domain";
import {ProductQuery} from "../ui/query/product.query";

export class DescByTitleSortOptionDomain implements SortOptionDomain {
  readonly name = 'Descending by title'

  sortingMethod(data: ProductQuery[]): ProductQuery[] {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
  }

}
