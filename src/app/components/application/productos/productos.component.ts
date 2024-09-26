import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  // Columnas a mostrar en la tabla
  displayedColumnsProducts: string[] = ['id', 'name', 'category', 'stock', 'actions'];

  // Datos de ejemplo de productos
  productData = [
    { id: 1, name: 'Cocacola', category: 'Bebidas', stock: 50 },
    { id: 2, name: 'Ron', category: 'Bebidas', stock: 100 },
    { id: 3, name: 'Agua', category: 'Bebidas', stock: 20 },
    { id: 4, name: 'Cerveza', category: 'Bebidas', stock: 60 },
  ];

  // Filtro de búsqueda
  filteredProducts = [...this.productData];

  // Filtrar productos por nombre, categoría o stock
  applyFilter(filterValue: string) {
    const searchTerm = filterValue.trim().toLowerCase();
    this.filteredProducts = this.productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.stock.toString().includes(searchTerm)
    );
  }

  // Métodos de edición y eliminación (puedes añadir lógica aquí)
  editProduct(product: any) {
    console.log('Editando producto', product);
    // Lógica para editar producto
  }

  deleteProduct(product: any) {
    console.log('Eliminando producto', product);
    // Lógica para eliminar producto
  }
}
