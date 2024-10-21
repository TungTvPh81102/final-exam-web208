import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productForm!: FormGroup;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activeRouter.snapshot.params['id'];

    if (id) {
      this.productService.getById(id).subscribe((product) => {
        this.productForm.patchValue(product);
      });
    }

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      quantity: [0],
      description: [''],
    });
  }

  handleSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const id = +this.activeRouter.snapshot.params['id'];

    this.productService
      .edit({ ...this.productForm.value, id })
      .subscribe(() => {
        alert('Cap nhat san pham thanh cong');
        this.router.navigate(['/products']);
      });
  }
}
