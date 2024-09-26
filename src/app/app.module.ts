import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { HomeAppComponent } from './views/home-app/home-app.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AboutComponent } from './components/home/about/about.component';
import { HeaderApplicationComponent } from './components/application/header-application/header-application.component';
import { SignupComponent } from './views/signup/signup.component';
import { SidenavComponent } from './components/application/sidenav/sidenav.component';
import { CajaComponent } from './components/application/caja/caja.component';
import { CuentasGuardadasComponent } from './components/application/cuentas-guardadas/cuentas-guardadas.component';
import { HistorialVentasComponent } from './components/application/historial-ventas/historial-ventas.component';
import { MovimientosCajaComponent } from './components/application/movimientos-caja/movimientos-caja.component';
import { ProductosComponent } from './components/application/productos/productos.component';
import { ReporteVentasComponent } from './components/application/reporte-ventas/reporte-ventas.component';
import { InventarioComponent } from './components/application/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAppComponent,
    LoginComponent,
    NotFoundComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HeaderApplicationComponent,
    SignupComponent,
    SidenavComponent,
    CajaComponent,
    CuentasGuardadasComponent,
    HistorialVentasComponent,
    MovimientosCajaComponent,
    ProductosComponent,
    ReporteVentasComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
