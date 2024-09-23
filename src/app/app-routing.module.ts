import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from './views/home-app/home-app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch:'full'},
  { path: 'home',component:HomeComponent},
  { path: 'login', component:LoginComponent },
  { path: 'home-project',component:HomeAppComponent},
  { path: 'profile',component:ProfileComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
