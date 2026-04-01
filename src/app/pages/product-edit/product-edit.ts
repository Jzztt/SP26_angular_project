import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {
  userForm: FormGroup
  id: number = 0
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private navigation: Router
  ) {
    this.userForm = this.fb.group({
      name: [''],
      description: [''],
      quantity: [''],
      price: [''],
    })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productService.getProductById(this.id).subscribe((data) => {
      this.userForm.patchValue(data);
    })
  }
  async onSubmit() {
    await this.productService.updateProduct(this.id, this.userForm.value).subscribe()

    this.navigation.navigate(['/products'])
  }
}
