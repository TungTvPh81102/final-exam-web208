import { Component } from '@angular/core';
import { IProduct } from '../../../interface';
import { ProductsService } from '../../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products!: IProduct[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
    });
  }

  handleRemove(id: number) {
    const comfirm = window.confirm(`Bạn coó muốn xá sản phẩm ${id} không ?`);

    if (comfirm) {
      this.productService.remove(id).subscribe(() => {
        alert('Xá sản phẩm thành công!');
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  }
}
