import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './categories-list.component';
import {MatChipsModule} from "@angular/material/chips";
import {PushModule} from "@rx-angular/template";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatChipsModule,
    PushModule,
    CommonModule
  ],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
