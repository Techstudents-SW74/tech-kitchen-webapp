import { Component, OnInit } from '@angular/core';
import { SalesService } from './service/sales.service'; // Ajusta la ruta según la estructura de tu proyecto

@Component({
  selector: 'app-movimientos-caja',
  templateUrl: './movimientos-caja.component.html',
  styleUrls: ['./movimientos-caja.component.scss']
})
export class MovimientosCajaComponent implements OnInit {
  sales: any[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.salesService.getSales().subscribe((data) => {
      this.sales = data;
    });
  }
}
