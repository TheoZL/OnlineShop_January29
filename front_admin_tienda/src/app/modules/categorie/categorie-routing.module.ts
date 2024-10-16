import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';

"localhost:5200/categorias/lista"
const routes: Routes = [
  {
    path: '',
    component: CategorieComponent,
    children: [
      {
        path: 'lista',
        component: CategorieListComponent
      },
      {
        path: '',redirectTo: 'lista', pathMatch: 'full',
      },
      {
        path: '**',redirectTo: 'lista', pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
