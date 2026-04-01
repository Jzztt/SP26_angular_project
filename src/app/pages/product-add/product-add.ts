import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: [''],
      description: [''],
      quantity: [''],
      price: [''],
    });
  }
  async onSubmit() {
    await this.productService.createProduct(this.userForm.value).subscribe();

    this.router.navigate(['/products']);
  }
}
