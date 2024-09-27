import { Component } from '@angular/core';
import { CustomerAccountService } from 'src/app/services/cuentas-guardadas/customer-account.service';
import { CustomerAccount } from 'src/app/models/customerAccount/customerAccount.module';

@Component({
  selector: 'app-cuentas-guardadas',
  templateUrl: './cuentas-guardadas.component.html',
  styleUrls: ['./cuentas-guardadas.component.scss']
})
export class CuentasGuardadasComponent {
  searchTerm: string = '';
  accounts: CustomerAccount[] = [];
  filteredItems: CustomerAccount[] = [];
  showMesas: boolean = true;

  constructor(private customerAccountService: CustomerAccountService) {}

  ngOnInit(): void {
    this.getAllCustomerAccounts();
  }

  getAllCustomerAccounts(): void {
    this.customerAccountService.getCustomerAccountList().subscribe((accounts) => {
      this.accounts = accounts;
      this.filteredItems = [...this.accounts]; // Actualiza los items filtrados
    });
  }

  filterItems() {
    this.filteredItems = this.accounts.filter(item =>
      item.accountName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredItems = [...this.accounts]; // Restablecer la lista al estado inicial
  }

  getCardColor(status: string): string {
    switch (status) {
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

  getStatusText(status: string): string {
    switch (status) {
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

  // Cambiar la vista a mostrar mesas
  viewMesas() {
    this.showMesas = true;
  }

  // Cambiar la vista a mostrar cuentas
  viewCuentas() {
    this.showMesas = false;
  }
  
}
