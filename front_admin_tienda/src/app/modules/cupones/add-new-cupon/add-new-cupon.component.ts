import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CuponesService } from '../_services/cupones.service';

@Component({
  selector: 'app-add-new-cupon',
  templateUrl: './add-new-cupon.component.html',
  styleUrls: ['./add-new-cupon.component.scss']
})
export class AddNewCuponComponent implements OnInit {

  isLoading$:any;

  //codigo del cupón
  code:any;
  //tipo de cupon, porcentual o cantidad
  type_discount:any = 1;
  //contador
  discount:any = null;
  //uso limitado o ilimitado hasta elimninar
  type_count: any = 1;
  //cantidad de usos que lleva el cupon
  num_use:any = 0;
  //tipo de categoria o producto
  type_cupon:any = 1;
  //el cupon solo debe tener categoria o producto, uno de ambos
  //tipo de categoria: tipos de categorias que valen para el cupon
  categories_selected:any = [];
  //tipo de productos: los productos que valen para el cupon
  products_selected:any = [];

  //se almacenan como string en la bd
  //array de categoria
  categories:any = [];
  //array de productos
  products:any = [];

  product_id:any = null;
  categorie_id:any = null;
  constructor(
    public _cuponesServices:CuponesService,
    public toaster:Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._cuponesServices.isLoadingSubject;
    this.configAll();
  }
  configAll(){
    this._cuponesServices.configAll().subscribe((resp:any)=>{
      console.log(resp);
      this.categories = resp.categories;
      this.products = resp.products;
    });
  }
  //se detecta en base al parametro seleccionado
  //check porcentaje o cantidad
  checkedTypeD(value){
    this.type_discount = value;
  }
  //check para tipos de uso, limitado o ilimitado
  checkedTypeC(value){
    this.type_count = value;
  }
  //check  pra tipo categoria o productos.
  checkedTypePC(value){
    this.type_cupon = value;
    this.products_selected = [];
    this.categories_selected = [];
    this.product_id = null;
    this.categorie_id = null;
  }

  addObject(){
    if(this.type_cupon == 1){
      let PRODUCT = this.products.find(item => item.id == this.product_id);
      let INDEX = this.products_selected.findIndex(item => item.id == this.product_id);
      if(INDEX != -1){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'EL PRODUCTO YA FUE SELECCIONADO.'`});
        return;
      }else{
        this.product_id = null;
        this.products_selected.push({
          name: PRODUCT.title,
          id:PRODUCT.id,
        });
      }
    }else{
      let CATEGORIA = this.categories.find(item => item.id == this.categorie_id);
      let INDEX = this.categories_selected.findIndex(item => item.id == this.categorie_id);
      if(INDEX != -1){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'EL CATEGORIA YA FUE SELECCIONADO.'`});
        return;
      }else{
        this.categorie_id = null;
        this.categories_selected.push({
          name: CATEGORIA.name,
          id:CATEGORIA.id,
        });
      }
    }
  }

  newCupon(){
    if(!this.code){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'NECESITAS DIGITAR UN CODIGO DE CUPON.'`});
      return;
    }
    if(this.discount <= 0){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'EL DESCUENTO TIENE QUE SER MAYOR A 0.'`});
      return;
    }
    if(this.type_count == 2 && this.num_use <= 0){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'EL NUMERO DE USO TIENE QUE SER MAYOR A 0.'`});
      return;
    }
    if(this.type_cupon == 1 && this.products_selected.length == 0){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'NECESITAS AGREGAR UN PRODUCTO.'`});
      return;
    }
    if(this.type_cupon == 2 && this.categories_selected.length == 0){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'NECESITAS AGREGAR UNA CATEGORIA.'`});
      return;
    }

    let data = {
      code: this.code,
      type_discount: this.type_discount,
      discount: this.discount,
      type_count: this.type_count,
      num_use: this.num_use,
      type_cupon: this.type_cupon,
      products_selected: this.products_selected,
      categories_selected: this.categories_selected,
    }

    this._cuponesServices.createCupones(data).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'${resp.message_text}.'`});
        return;
      }else{
        this.toaster.open(NoticyAlertComponent,{text:`primary-'SE HA REGISTRADO EL CUPON PERFECTAMENTE.'`});
        this.code = null;
        this.type_discount = 1;
        this.discount = null;
        this.type_count = 1;
        this.num_use = 0;
        this.type_cupon = 1;
        this.products_selected = [];
        this.categories_selected = [];
        return;
      }
    })
  }

  productD(productS){
    let INDEX = this.products_selected.findIndex(item => item.id == productS.id);
    if(INDEX != -1){
      this.products_selected.splice(INDEX,1);
    }
  }
  categorieD(categoriaS){
    let INDEX = this.categories_selected.findIndex(item => item.id == categoriaS.id);
    if(INDEX != -1){
      this.categories_selected.splice(INDEX,1);
    }
  }
}
