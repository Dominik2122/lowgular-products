import {SortOptionDomain} from "../../domain/sort-option.domain";

export type SortProductsCommand = Pick<SortOptionDomain, 'sortingMethod'>
