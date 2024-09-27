import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from './views/home-app/home-app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SignupComponent } from './views/signup/signup.component';

export const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: 'home',component:HomeComponent},
  { path: 'login', component:LoginComponent },
  { path: 'signup',component:SignupComponent},
  { path: 'home-project',component:HomeAppComponent},
  { path: 'profile',component:ProfileComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
