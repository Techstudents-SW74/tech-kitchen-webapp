import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.scss']
})
export class ReporteVentasComponent {
  displayedColumnsSales: string[] = ['id', 'date', 'total', 'customer'];
  salesData = [
    { id: 1, date: '2024-08-21', total: '$200', customer: 'Juan Perez' },
    { id: 2, date: '2024-08-22', total: '$350', customer: 'Maria Lopez' },
    { id: 3, date: '2024-08-23', total: '$500', customer: 'Carlos Sanchez' },
  ];
}
