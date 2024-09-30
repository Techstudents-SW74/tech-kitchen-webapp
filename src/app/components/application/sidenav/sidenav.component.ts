import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isSidenavOpen = true;
  currentComponent: string = '';

  // Lista de botones del sidenav
  sidenavButtons = [
    { label: 'Casing', component: 'caja' },
    { label: 'Saved accounts', component: 'cuentas' },
    { label: 'Sales History', component: 'historial' },
    { label: 'Casing Movements', component: 'movimientos' },
    { label: 'Product', component: 'productos' },
    { label: 'Sales Report', component: 'reporte' },
    { label: 'Inventory', component: 'inventario' }
  ];

  showComponent(component: string) {
    this.currentComponent = component;
  }
}
