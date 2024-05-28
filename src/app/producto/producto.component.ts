import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  products = [
    { category: 'embrague', image: 'assets/img/producto/valeo/DISCO-DE-EMBRAGUE-768x551.png', alt: 'Producto 1' },
    { category: 'caja', image: 'assets/img/producto/HANSANG/14-HANSANG-PINON-Y-CORONA-768x512.jpg', alt: 'Producto 2' },
    { category: 'freno', image: 'assets/img/producto/SANGSIN/pastilla-hagen.1-3-768x492.png', alt: 'Producto 3' },
    { category: 'embrague', image: 'assets/img/producto/valeo/PLATO-DE-EMBRAGUE-768x515.png', alt: 'Producto 4' },
    { category: 'freno', image: 'assets/img/producto/SANGSIN/pastilla-hiq.1-2-768x469.png', alt: 'Producto 5' },
    { category: 'caja', image: 'assets/img/producto/HANSANG/PROPULSOR-Y-DESLIZANTE-3-768x636.png', alt: 'Producto 6' },
    { category: 'nueva', image: 'assets/img/producto/SANGSIN/pastilla-severe-duty.1-1-768x523.png', alt: 'Producto 7' },
    { category: 'embrague', image: 'assets/img/producto/valeo/IPEX080internet-768x512.jpg', alt: 'Producto 8' },
    { category: 'caja', image: 'assets/img/producto/HANSANG/TRENFIJO2-768x690.jpg', alt: 'Producto 9' },
    { category: 'freno', image: 'assets/img/producto/SANGSIN/pastilla-severe-duty.1-1-768x523.png', alt: 'Producto 10' }
  ];

  filteredProducts = this.products;

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}
