import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  isEdit = false;

  newProduct: any = this.getEmptyProduct();

  getEmptyProduct() {
    return {
      name: '',
      description: '',
      price: 0,
      usedFor: '',
      stock: 0,
      available: true,
      specifications: [],
    };
  }

  addSpecification() {
    this.newProduct.specifications.push({ name: '', value: '' });
  }

  removeSpecification(index: number) {
    this.newProduct.specifications.splice(index,1);
  }
}
