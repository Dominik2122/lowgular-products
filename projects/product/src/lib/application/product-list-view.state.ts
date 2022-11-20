import {Inject, Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {SortProductsCommandPort} from './ui/command/sort-products.command-port';
import {FilterProductsCommandPort} from './ui/command/filter-products.command-port';
import {GetAllCategoriesQueryPort} from './ui/query/get-all-categories.query-port';
import {GetAllProductsQueryPort} from './ui/query/get-all-products.query-port';
import {PRODUCTS_STORAGE_PORT, ProductsStoragePort} from './infrastructure/storage/products.storage-port';
import {
  PRODUCT_LIST_VIEW_STORAGE_PORT,
  ProductListViewStoragePort
} from './infrastructure/storage/product-list-view.storage-port';
import {GET_ALL_CATEGORIES_DTO_PORT, GetAllCategoriesDtoPort} from './infrastructure/dto/get-all-categories.dto-port';
import {FilterProductsCommand} from './ui/command/filter-products.command';
import {ProductQuery} from './ui/query/product.query';
import {SortProductsCommand} from "./ui/command/sort-products.command";
import {ProductDto} from "./infrastructure/dto/product.dto";
import {ProductListViewStorageData} from "./infrastructure/storage/product-list-view.storage-data";

@Injectable()
export class ProductListViewState implements SortProductsCommandPort, FilterProductsCommandPort, GetAllCategoriesQueryPort, GetAllProductsQueryPort {
  constructor(
    @Inject(PRODUCTS_STORAGE_PORT) private _productsStoragePort: ProductsStoragePort,
    @Inject(PRODUCT_LIST_VIEW_STORAGE_PORT) private _productListViewStoragePort: ProductListViewStoragePort,
    @Inject(GET_ALL_CATEGORIES_DTO_PORT) private _getAllCategoriesDtoPort: GetAllCategoriesDtoPort
  ) {
    this.setDefaultView()
  }

  getAllProducts(): Observable<ProductQuery[]> {
    return this._productsStoragePort.selectProducts().pipe(
      switchMap(products => {
        return this._productListViewStoragePort.selectListView().pipe(
          map(listView => this.updateProductsWithCurrentViewSettings(products, listView)),
        )
      })
    )
  }

  sortProducts(command: SortProductsCommand): void {
    this._productListViewStoragePort.selectListView().pipe(
      first(),
      tap(data => this._productListViewStoragePort.set({...data, currentSortingMethod: command.sortingMethod}))
    ).subscribe()
  }

  filterProducts(command: FilterProductsCommand): void {
    this._productListViewStoragePort.selectListView().pipe(
      first(),
      tap(data => this._productListViewStoragePort.set({...data, currentCategory: command.category}))
    ).subscribe()
  }

  getAllCategories(): Observable<string[]> {
    return this._getAllCategoriesDtoPort.getAllCategories()
  }

  private setDefaultView(): void {
    this._productListViewStoragePort.set({currentCategory: null, currentSortingMethod: null})
  }

  private updateProductsWithCurrentViewSettings(products: ProductDto[], settings: ProductListViewStorageData): ProductQuery[] {
    let currentProducts: ProductQuery[] = settings.currentCategory ?
      products.filter(product => product.category === settings.currentCategory) : products

    currentProducts = settings.currentSortingMethod ?
      settings.currentSortingMethod(currentProducts) : currentProducts

    return [...currentProducts]
  }

}
