import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {
  displayedColumns: string[] = ['id', 'product', 'quantity', 'price'];
  inventoryData = [
    { id: 1, product: 'Coca cola', quantity: 50, price: '$150' },
    { id: 2, product: 'Blue label', quantity: 30, price: '$120' },
    { id: 3, product: 'ron', quantity: 100, price: '$50' },
  ];
}


