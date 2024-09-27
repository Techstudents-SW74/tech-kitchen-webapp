import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products); // Para verificar que los datos se han cargado
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}
