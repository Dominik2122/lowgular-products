import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ProductDto} from "../../src/lib/application/infrastructure/dto/product.dto";
import {GetAllProductsQueryPort} from "../../src/lib/application/ui/query/get-all-products.query-port";
import {GET_ALL_PRODUCTS_DTO_PORT} from "../../src/lib/application/infrastructure/dto/get-all-products.dto-port";
import {Observable, of} from "rxjs";
import {
  PRODUCTS_STORAGE_PORT,
  ProductsStoragePort
} from "../../src/lib/application/infrastructure/storage/products.storage-port";
import {ProductState} from "../../src/lib/application/product.state";
import clearAllMocks = jest.clearAllMocks;
import {ProductsStorage} from "../../src/lib/infrastructure/storage/products.storage";
import {MockProductsStorage} from "./mocks/mock-products.storage";
import {ProductListViewState} from "../../src/lib/application/product-list-view.state";
import {
  PRODUCT_LIST_VIEW_STORAGE_PORT,
  ProductListViewStoragePort
} from "../../src/lib/application/infrastructure/storage/product-list-view.storage-port";
import {MockProductsListViewStorage} from "./mocks/mock-products-list-view.storage";
import {
  GET_ALL_CATEGORIES_DTO_PORT,
  GetAllCategoriesDtoPort
} from "../../src/lib/application/infrastructure/dto/get-all-categories.dto-port";
import {productsDTO} from "./mocks/mock-get-all-products.service";
import {ProductQuery} from "../../src/lib/application/ui/query/product.query";

const mockCategories = Array.from(new Set(productsDTO.map(product => product.category)))


const mockGetAllCategoriesService: GetAllCategoriesDtoPort = {
  getAllCategories(): Observable<string[]> {
    return of(mockCategories)
  }
}

const sortProductByPriceAsc = (products: ProductQuery[]) => products.sort((a, b) => a.price > b.price ? 1 : -1)


describe('ProductStateListView', () => {
  let storagePort: ProductsStoragePort
  let storageListViewPort: ProductListViewStoragePort
  let productListViewState: ProductListViewState

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductListViewState,
        {
          provide: PRODUCTS_STORAGE_PORT, useClass: MockProductsStorage
        },
        {
          provide: PRODUCT_LIST_VIEW_STORAGE_PORT, useClass: MockProductsListViewStorage
        },
        {
          provide: GET_ALL_CATEGORIES_DTO_PORT, useValue: mockGetAllCategoriesService
        },
      ]
    });

    productListViewState = TestBed.inject(ProductListViewState)
    storagePort = TestBed.inject(PRODUCTS_STORAGE_PORT)
    storageListViewPort = TestBed.inject(PRODUCT_LIST_VIEW_STORAGE_PORT)

  });

  it('should set empty view settings on init', (done) => {
    storageListViewPort.selectListView().subscribe(settings => {
      expect(settings.currentSortingMethod).toBeNull()
      expect(settings.currentCategory).toBeNull()
      done()
    })
  });

  it('should add only sort method when requested', (done) => {
    productListViewState.sortProducts({sortingMethod: sortProductByPriceAsc})
    storageListViewPort.selectListView().subscribe(settings => {
      expect(settings.currentSortingMethod).toEqual(sortProductByPriceAsc)
      expect(settings.currentCategory).toBeNull()
      done()
    })
  });

  it('should add only category when requested', (done) => {
    const category = 'food'
    productListViewState.filterProducts({category})
    storageListViewPort.selectListView().subscribe(settings => {
      expect(settings.currentSortingMethod).toBeNull()
      expect(settings.currentCategory).toEqual(category)
      done()
    })
  });

  it('should sort current products with current sorting method', (done) => {
    storagePort.set(productsDTO)
    productListViewState.sortProducts({sortingMethod: sortProductByPriceAsc})
    productListViewState.getAllProducts().subscribe(products => {
      expect(isEveryProductAscendingByPrice(products)).toBeTruthy()
      done()
    })
  });

  it('should filter current products with current category', (done) => {
    const category = productsDTO[0].category
    storagePort.set(productsDTO)
    productListViewState.filterProducts({category})
    productListViewState.getAllProducts().subscribe(products => {
      expect(isEveryProductWithCorrectCategory(products, category)).toBeTruthy()
      done()
    })
  });

  it('should filter and sort current products with current settings', (done) => {
    const category = productsDTO[0].category
    storagePort.set([...productsDTO,
      {id: 13, title: 'ABCD', price: 2, category},
      {id: 14, title: 'ABCD', price: 141342, category},
      {id: 15, title: 'ABCD', price: 312, category},
      {id: 16, title: 'ABCD', price: 54, category},
    ] as any)
    productListViewState.filterProducts({category})
    productListViewState.sortProducts({sortingMethod: sortProductByPriceAsc})
    productListViewState.getAllProducts().subscribe(products => {
      expect(isEveryProductAscendingByPrice(products)).toBeTruthy()
      expect(isEveryProductWithCorrectCategory(products, category)).toBeTruthy()
      done()
    })
  });

  it('should filter and sort current products with current settings when products change', (done) => {
    const category = productsDTO[0].category
    productListViewState.filterProducts({category})
    productListViewState.sortProducts({sortingMethod: sortProductByPriceAsc})
    storagePort.set([...productsDTO,
      {id: 13, title: 'ABCD', price: 2, category},
      {id: 14, title: 'ABCD', price: 141342, category},
      {id: 15, title: 'ABCD', price: 312, category},
      {id: 16, title: 'ABCD', price: 54, category},
    ] as any)
    storagePort.set([...productsDTO,
      {id: 15, title: 'ABCD', price: 312, category},
      {id: 16, title: 'ABCD', price: 54, category},
    ] as any)
    productListViewState.getAllProducts().subscribe(products => {
      expect(isEveryProductAscendingByPrice(products)).toBeTruthy()
      expect(isEveryProductWithCorrectCategory(products, category)).toBeTruthy()
      done()
    })
  });

});


const isEveryProductAscendingByPrice = (products: ProductQuery[]) => products.every((product, i) =>
  i === (products.length - 1) || product.price <= products[i + 1].price);

const isEveryProductWithCorrectCategory = (products: ProductQuery[], category: string) => products.every(product => product.category === category);
