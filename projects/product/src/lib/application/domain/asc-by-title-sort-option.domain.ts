import {SortOptionDomain} from "./sort-option.domain";
import {ProductQuery} from "../ui/query/product.query";

export class AscByTitleSortOptionDomain implements SortOptionDomain {
  readonly name = 'Ascending by title'

  sortingMethod(data: ProductQuery[]): ProductQuery[] {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
  }

}
