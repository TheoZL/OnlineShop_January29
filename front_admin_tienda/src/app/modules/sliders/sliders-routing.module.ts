import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidersComponent } from './sliders.component';
import { SlidersListsComponent } from './sliders-lists/sliders-lists.component';

//ruta localhost/sliders
//ruta localhost/sliders/list
const routes: Routes = [
  {
    //ruta principal para los sliders
    path: '',
    component: SlidersComponent,
    children: [
      {
        //ruta hija para listar los sliders
        path: 'list',
        component: SlidersListsComponent,
      },
      //rutas base para path general
      {
        path: '',redirectTo: 'list', pathMatch: 'full',
      },
      {
        path: '**',redirectTo: 'list', pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidersRoutingModule { }
