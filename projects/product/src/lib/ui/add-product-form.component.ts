import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  ADD_ONE_PRODUCT_COMMAND_PORT,
  AddOneProductCommandPort
} from '../application/ui/command/add-one-product.command-port';
import {Router} from "@angular/router";

@Component({
  selector: 'lib-add-product-form',
  templateUrl: './add-product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductFormComponent {
  readonly addProduct: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl(),
  });

  constructor(
    private readonly router: Router,
    @Inject(ADD_ONE_PRODUCT_COMMAND_PORT) private _addOneProductCommandPort: AddOneProductCommandPort
  ) {
  }

  onAddProductSubmitted(addProduct: FormGroup): void {
    this._addOneProductCommandPort.addOneProduct(addProduct.value).subscribe({
      next: () => this.router.navigate(['..']),
      error: (err) => this.addProduct.setErrors(err)
    })
  }
}
