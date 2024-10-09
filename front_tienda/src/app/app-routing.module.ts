import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './modules/error404/error404.component';
import { InfoComponent } from './modules/info/info.component';
import { RecaptchaModule } from 'ng-recaptcha';






export const routes: Routes = [
{
  //se inicia la ruta y el modulo que corresponde, home
  path: '',
  loadChildren: () => import("./modules/home/home.module").then(m =>m.HomeModule),
},
{
  //se inicia la ruta autenticacion y el modulo auth
  path: 'auth',
  loadChildren: () => import("./modules/auth-profile/auth-profile.module").then(m =>m.AuthProfileModule),
},
{
  //se inicia la ruta autenticacion y el modulo auth
  path: '404',
  component: Error404Component,
},
{
  path: '',
  loadChildren: () => import("./modules/ecommerce-auth/ecommerce-auth.module").then(m => m.EcommerceAuthModule),
},
// {
//   //si la ruta es por defecto carga el path completo
//   path: '',
//   redirectTo: '/home',
//   pathMatch: 'full',
// },
{
  path:'info',
  loadChildren: () => import("./modules/info/info.module").then(m =>m.InfoModule),
},
// {
//   //si la ruta no existe carga el modulo error 404
//   path:'**',
//   component: Error404Component,
// },
]

@NgModule({
 // declarations: [],
 //se declara los routes para que se visualicen solamente las rutas del route
  imports: [
    RouterModule.forRoot(routes),
    RecaptchaModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
