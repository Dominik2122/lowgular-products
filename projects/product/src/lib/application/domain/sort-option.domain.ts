import {ProductQuery} from "../ui/query/product.query";

export interface SortOptionDomain {
  readonly name: string;
  readonly sortingMethod: null | ((data: ProductQuery[]) => ProductQuery[]);
}
