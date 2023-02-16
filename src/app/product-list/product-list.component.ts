import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productos = products;

  compartir() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Se le notificara cuando el producto salga a la venta');
  }
}
