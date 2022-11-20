import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ProductDto} from "../../src/lib/application/infrastructure/dto/product.dto";
import {
  PRODUCTS_STORAGE_PORT, ProductsStoragePort,
} from "../../src/lib/application/infrastructure/storage/products.storage-port";
import {ProductState} from "../../src/lib/application/product.state";
import {GET_ALL_PRODUCTS_DTO_PORT} from "../../src/lib/application/infrastructure/dto/get-all-products.dto-port";
import {
  ADD_ONE_PRODUCT_DTO_PORT,
  AddOneProductDtoPort
} from "../../src/lib/application/infrastructure/dto/add-one-product.dto-port";
import {
  DELETE_ONE_PRODUCT_DTO_PORT,
  DeleteOneProductDtoPort
} from "../../src/lib/application/infrastructure/dto/delete-one-product.dto-port";
import {MockProductsStorage} from "./mocks/mock-products.storage";
import {MockGetAllProductsService, productsDTO} from "./mocks/mock-get-all-products.service";
import {EMPTY, Observable, of} from "rxjs";
import {AddOneProductCommand} from "../../src/lib/application/ui/command/add-one-product.command";

const mockAddOne: AddOneProductDtoPort = {
  addOneProduct(productData: Omit<ProductDto, "id" | "image" | "category">): Observable<ProductDto> {
    return of(productData as any)
  }
}

const mockDeleteOne: DeleteOneProductDtoPort = {
  deleteOneProduct(id: number): Observable<void> {
    return EMPTY
  }
}


describe('ProductState', () => {
  let productState: ProductState
  let storagePort: ProductsStoragePort

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductState,
        {
          provide: GET_ALL_PRODUCTS_DTO_PORT, useClass: MockGetAllProductsService
        },
        {
          provide: PRODUCTS_STORAGE_PORT, useClass: MockProductsStorage
        },
        {
          provide: ADD_ONE_PRODUCT_DTO_PORT, useValue: mockAddOne
        },
        {
          provide: DELETE_ONE_PRODUCT_DTO_PORT, useValue: mockDeleteOne
        }
      ]
    });
    productState = TestBed.inject(ProductState)
    storagePort = TestBed.inject(PRODUCTS_STORAGE_PORT)
  });

  it('should fetch data and set it in storage when inited', (done) => {
    storagePort.selectProducts().subscribe(data => {
      expect(data).toEqual(productsDTO)
      done()
    })
  });

  it('should returned list of products with added product when new product is added', (done) => {
    const addedProduct: AddOneProductCommand = {title: 'aaa', description: 'bbb', price: 10}
    productState.addOneProduct(addedProduct).subscribe(() => {
      storagePort.selectProducts().subscribe(data => {
        expect(data).toContain(addedProduct)
        done()
      })
    })
  });

  it('should return list of products without deleted one when product is deleted', (done) => {
    const removedProduct = productsDTO[0]
    productState.removeProduct({id: removedProduct.id})
    storagePort.selectProducts().subscribe(data => {
      expect(data).not.toContain(removedProduct)
      done()
    })
  });

});
