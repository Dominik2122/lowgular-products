import {SortOptionDomain} from "./sort-option.domain";
import {ProductQuery} from "../ui/query/product.query";

export class AscByPriceSortOptionDomain implements SortOptionDomain {
  readonly name = 'Ascending by price'

  sortingMethod(data: ProductQuery[]): ProductQuery[] {
    return data.sort((a, b) => a.price > b.price ? 1 : -1);
  }

}
