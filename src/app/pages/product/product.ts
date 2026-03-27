import { Component, signal } from '@angular/core';
import { IProduct, ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(
    private productService: ProductService,
  ) { }
  // products: IProduct[] = [];
  products = signal<IProduct[]>([]);

  ngOnInit() {
    this.productService.fetchProducts().subscribe((data: IProduct[]) => {
      this.products.set(data);
      console.log(this.products());
    });
  }
}
