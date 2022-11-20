import { NgModule } from '@angular/core';
import { ProductSortingSelectComponent } from './product-sorting-select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [ProductSortingSelectComponent],
  providers: [],
  exports: [ProductSortingSelectComponent]
})
export class ProductSortingSelectComponentModule {
}
