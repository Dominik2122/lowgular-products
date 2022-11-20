import {SortOptionDomain} from "../../domain/sort-option.domain";

export interface ProductListViewStorageData {
  currentCategory: string | null;
  currentSortingMethod: SortOptionDomain['sortingMethod'] | null;
}
