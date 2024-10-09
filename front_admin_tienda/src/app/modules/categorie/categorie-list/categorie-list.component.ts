import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../_services/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCategorieComponent } from '../components/add-categorie/add-categorie.component';
import { URL_BACKEND } from 'src/app/config/config';
import { EditCategorieComponent } from '../components/edit-categorie/edit-categorie.component';
import { DeleteCategorieComponent } from '../components/delete-categorie/delete-categorie.component';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  //creación de variables
  isLoading$;
  search:any= null;
  categorias:any= [];
  URL_BACKEND:any= URL_BACKEND;

  constructor(
    //importar y crear la instancia de User services
    public _categorieService: CategorieService,
    //importar y crear la instancia de bootstrap
    public modelServices: NgbModal,
  ) { }

  ngOnInit(): void {
    //se da referencia de categoriServices al thisloading en categorie-list
    this.isLoading$= this._categorieService.isLoading$;
    this.allCategories();
  }

  allCategories(){
    this._categorieService.allCategories(1,this.search).subscribe((resp:any)=>{
      console.log(resp);
      this.categorias = resp.categorias;
    })
  }

  reset(){
    this.search =null;
    this.allCategories();
  }


    //función para la creación de categorias
  addCategoria(){
    //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en categorie/componente/add-categorie
    const modalRef = this.modelServices.open(AddCategorieComponent, {centered : true, size: 'sm'});
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    //se le indica el formato que recibe el hijo
    modalRef.componentInstance.clientsE.subscribe((resp:any)=>{
      ////console.log(resp);
      this.categorias.unshift(resp);
    });
  }

  edit(categoria){
    //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en categorie/componente/edit-categorie
    const modalRef = this.modelServices.open(EditCategorieComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.categoria_selected = categoria;
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    modalRef.componentInstance.clientsE.subscribe((resp:any)=>{
      let INDEX = this.categorias.findIndex(item => item.id == resp.id);
      this.categorias[INDEX] = resp;
    });
  }

  delete(categoria){
    //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en categorie/componente/edit-categorie
    const modalRef = this.modelServices.open(DeleteCategorieComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.categoria_selected = categoria;
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    modalRef.componentInstance.clientsE.subscribe((resp:any)=>{
      let INDEX = this.categorias.findIndex(item => item.id == resp.id);
      this.categorias.splice(INDEX,1);
    });
  }


}
