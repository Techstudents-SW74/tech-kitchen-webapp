import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isSidenavOpen = true; // Variable para controlar el estado del sidenav
  currentComponent: string = ''; // Variable para almacenar el componente actual a mostrar

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen; // Alternar el estado del sidenav
  }

  showComponent(component: string) {
    this.currentComponent = component; // Cambia el componente actual
  }
}
