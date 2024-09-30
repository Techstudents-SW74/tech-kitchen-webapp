import { Component } from '@angular/core';

@Component({
  selector: 'app-header-application',
  templateUrl: './header-application.component.html',
  styleUrls: ['./header-application.component.scss']
})
export class HeaderApplicationComponent {
  isMenuCollapsed: boolean = true;

  // Alterna el estado del menu
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  logout() {
    // Lógica para cerrar sesión
  }
}
