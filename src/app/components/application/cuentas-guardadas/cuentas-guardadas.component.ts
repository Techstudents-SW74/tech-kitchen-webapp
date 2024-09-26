import { Component } from '@angular/core';

@Component({
  selector: 'app-cuentas-guardadas',
  templateUrl: './cuentas-guardadas.component.html',
  styleUrls: ['./cuentas-guardadas.component.scss']
})
export class CuentasGuardadasComponent {
  searchTerm: string = '';
  items: any[] = [
    { number: 1, guests: 4, status: 'available',orderTotal: 0.00},
    { number: 2, guests: 2, status: 'occupied',orderTotal: 35.50},
    { number: 3, guests: 6, status: 'reserved',orderTotal:40.00},
    { number: 4, guests: 8, status: 'available',orderTotal: 0.00},
    { number: 5, guests: 10, status: 'available',orderTotal: 0.00},
    { number: 6, guests: 4, status: 'occupied',orderTotal: 125.90},
    { number: 7, guests: 2, status: 'reserved',orderTotal:40.00},
    { number: 8, guests: 3, status: 'occupied',orderTotal: 87.10},
    // Añade más elementos según sea necesario
  ];
  
  filteredItems: any[] = [...this.items]; // Copia inicial de los elementos filtrados

  filterItems() {
    this.filteredItems = this.items.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredItems = [...this.items]; // Restablecer la lista al estado inicial
  }

  getCardColor(status: string): string {
    switch(status) {
      case 'available':
        return 'lightgreen'; // Color para mesas disponibles
      case 'occupied':
        return 'lightcoral'; // Color para mesas ocupadas
      case 'reserved':
        return 'lightblue'; // Color para mesas reservadas
      default:
        return 'white'; // Color por defecto
    }
  }

  // Método para obtener el texto del estado de la mesa
  getStatusText(status: string): string {
    switch(status) {
      case 'available':
        return 'Disponible';
      case 'occupied':
        return 'Ocupada';
      case 'reserved':
        return 'Reservada';
      default:
        return 'Desconocido';
    }
  }

  viewMesas() {
    console.log("Ver Mesas clicked");
    // Lógica para ver las mesas o cambiar la vista si es necesario
  }
  
  viewCuentas() {
    console.log("Ver Cuentas clicked");
    // Lógica para ver las cuentas guardadas o cambiar la vista
  }
  
}
