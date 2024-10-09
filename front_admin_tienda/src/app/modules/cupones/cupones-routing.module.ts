import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCuponComponent } from './add-new-cupon/add-new-cupon.component';
import { CuponesComponent } from './cupones.component';
import { EditNewCuponComponent } from './edit-new-cupon/edit-new-cupon.component';
import { ListCuponesComponent } from './list-cupones/list-cupones.component';

//localhost/cupones
const routes: Routes = [
  {
    path: '',
    component: CuponesComponent,
    children: [
      {
        //path para registro
        path: 'registrar-cupon',
        component: AddNewCuponComponent,
      },
      {
        //path para editar
        path: 'editar-cupon/:id',
        component: EditNewCuponComponent,
      },
      {
        //path para listar cupones
        path: 'lista-cupones',
        component: ListCuponesComponent
      },
      //rutas en caso de no existir, rutas generales
      {
        path: '',redirectTo: 'lista-cupones', pathMatch: 'full',
      },
      {
        path: '**',redirectTo: 'lista-cupones', pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponesRoutingModule { }
