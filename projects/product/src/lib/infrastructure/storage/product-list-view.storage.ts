import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {ProductListViewStoragePort} from '../../application/infrastructure/storage/product-list-view.storage-port';
import {ProductListViewStorageData} from "../../application/infrastructure/storage/product-list-view.storage-data";

@Injectable()
export class ProductListViewStorage implements ProductListViewStoragePort {
  private _currentListViewSubject = new ReplaySubject<ProductListViewStorageData>(1);
  public currentListView$: Observable<ProductListViewStorageData> = this._currentListViewSubject.asObservable();

  set(data: ProductListViewStorageData): void {
    this._currentListViewSubject.next(data)
  }

  selectListView(): Observable<ProductListViewStorageData> {
    return this.currentListView$
  }

}
