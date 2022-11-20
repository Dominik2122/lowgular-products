import {Inject, Injectable} from '@angular/core';
import {first, map, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RemoveProductCommandPort} from './ui/command/remove-product.command-port';
import {AddOneProductCommandPort} from './ui/command/add-one-product.command-port';
import {GetOneProductQueryPort} from './ui/query/get-one-product.query-port';
import {GET_ALL_PRODUCTS_DTO_PORT, GetAllProductsDtoPort} from './infrastructure/dto/get-all-products.dto-port';
import {PRODUCTS_STORAGE_PORT, ProductsStoragePort} from './infrastructure/storage/products.storage-port';
import {ADD_ONE_PRODUCT_DTO_PORT, AddOneProductDtoPort} from './infrastructure/dto/add-one-product.dto-port';
import {DELETE_ONE_PRODUCT_DTO_PORT, DeleteOneProductDtoPort} from './infrastructure/dto/delete-one-product.dto-port';
import {ProductQuery} from './ui/query/product.query';
import {RemoveProductCommand} from './ui/command/remove-product.command';
import {AddOneProductCommand} from './ui/command/add-one-product.command';

@Injectable()
export class ProductState implements RemoveProductCommandPort,
  AddOneProductCommandPort,
  GetOneProductQueryPort {


  constructor(
    @Inject(GET_ALL_PRODUCTS_DTO_PORT) private _getAllProductsDtoPort: GetAllProductsDtoPort,
    @Inject(PRODUCTS_STORAGE_PORT) private _productsStoragePort: ProductsStoragePort,
    @Inject(ADD_ONE_PRODUCT_DTO_PORT) private _addOneProductDtoPort: AddOneProductDtoPort,
    @Inject(DELETE_ONE_PRODUCT_DTO_PORT) private _deleteOneProductDtoPort: DeleteOneProductDtoPort
  ) {
    this.loadData()
  }

  removeProduct(removeProductCommand: RemoveProductCommand): void {
    //this._deleteOneProductDtoPort.deleteOneProduct().pipe ....
    this._productsStoragePort.selectProducts().pipe(
      first(),
      map(products => products.filter(product => product.id !== removeProductCommand.id)),
      tap(updatedProducts => this._productsStoragePort.set(updatedProducts))
    ).subscribe()
  }

  addOneProduct(productData: AddOneProductCommand): Observable<void> {
    return this._addOneProductDtoPort.addOneProduct(productData).pipe(
      switchMap(addedProduct => {
        return this._productsStoragePort.selectProducts().pipe(
          first(),
          map(data => {
            data.unshift(addedProduct)
            this._productsStoragePort.set([...data])
          })
        )
      })
    )
  }

  getOneProduct(id: number): Observable<ProductQuery | undefined> {
    return this._productsStoragePort.selectProducts().pipe(
      map(data => data.find(product => product.id === id))
    )
  }

  private loadData(): void {
    this._getAllProductsDtoPort.getAllProducts().subscribe(data => this._productsStoragePort.set(data))
  }

}
