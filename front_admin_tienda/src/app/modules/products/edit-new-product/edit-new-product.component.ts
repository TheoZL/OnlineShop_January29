import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { ProductsService } from '../_services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteImagenPComponent } from './delete-imagen-p/delete-imagen-p.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteItemInventarioComponent } from './in/delete-item-inventario/delete-item-inventario.component';
import { EditItemInventarioComponent } from './in/edit-item-inventario/edit-item-inventario.component';
import { DeleteSubItemInventarioComponent } from './in/delete-sub-item-inventario/delete-sub-item-inventario.component';
import { EditSubItemInventarioComponent } from './in/edit-sub-item-inventario/edit-sub-item-inventario.component';

@Component({
  selector: 'app-edit-new-product',
  templateUrl: './edit-new-product.component.html',
  styleUrls: ['./edit-new-product.component.scss']
})
export class EditNewProductComponent implements OnInit {

  //Variable para el renderizado
  isLoading$: any;

  //Variables del producto
  title:any = null;
  sku:any = null;
  categorie_id:any = '';
  price_colones:any = '';
  price_usd:any = '';
  resumen:any = null;
  description:any = null;

  categories:any = [];

  //etiquetas
  text:any = null;
  tags:any = [];

  //imagen portada   
  imagen_file:any = null;
  imagen_pre:any = null;

  //imagenes del producto
  images_files:any = [];
  img_files:any = null;
  img_pre:any = null;

  product_id:any = null;
  product:any = null;

  //Inventario
  product_size_id:any = null;
  new_nombre:any = null;
  product_color_id:any = null;
  stock:any = null;
  products_colors:any = [];
  products_color_sizes:any = [];
  is_selected_dimension:Boolean = true;
  product_inventaries:any = [];
  checked_inventario:any = 1;
  stock_individual:any = 0;
  state:any = 1;


  constructor(
    public toaster:Toaster,
    public _productService: ProductsService, //para prueba eliminar al terminar
    public router: Router,
    public activerouter: ActivatedRoute,
    public modelService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._productService.isLoading$;
    this.activerouter.params.subscribe((resp:any) => {
      this.product_id = resp["id"] || "";
    })
    this._productService.getInfo().subscribe((resp:any) => {
      this.categories = resp.categories;
      this.products_colors = resp.products_colors;
      this.products_color_sizes = resp.products_color_sizes;
    })
    this._productService.showProduct(this.product_id).subscribe((resp:any) => {
      console.log(resp);
      this.product = resp.product;
      this.title = this.product.title;
      this.sku = this.product.sku;
      this.categorie_id = this.product.categorie_id;
      this.price_colones = this.product.price_colones;
      this.price_usd = this.product.price_usd;
      this.resumen = this.product.resumen;
      this.description = this.product.description;
      this.tags = this.product.tags_a;
      this.imagen_pre = this.product.imagen;
      this.images_files = this.product.images;
      this.product_inventaries = this.product.sizes;
      this.stock_individual = this.product.stock;
      this.checked_inventario = this.product.checked_inventario;
      this.state = this.product.state;
    })
  }

  //para renderizar la vista y que se muestra la imagen de portada
  loadService(){
    this._productService.isLoadingSubject.next(true);
    setTimeout(()=>{
      this._productService.isLoadingSubject.next(false)
    }, 50);
  }

  //Agrega la imagen de la portada
  processFile($event){
  if($event.target.files[0].type.indexOf("image")< 0){
  //notificación de que el archivo seleccionado
  this.toaster.open(NoticyAlertComponent,{text:`danger-'El archivo cargado no es una imagen'`});
  return;
  }
  //variable que almacena el archovo seleccionado
  this.imagen_file =$event.target.files[0];
  //lee el archivo en base 64
  let reader = new FileReader();
  reader.readAsDataURL(this.imagen_file);
  reader.onloadend = () => this.imagen_pre = reader.result;
  this.loadService();
  }

  addTags(){
    this.tags.push(this.text)
    this.text= null;
  }
  removeTags(index){
    this.tags.splice(index,1);
  }

  //agrega las imagenes del producto
  addFile($event){
  if($event.target.files[0].type.indexOf("image")< 0){
  //notificación de que el archivo seleccionado
    this.toaster.open(NoticyAlertComponent,{text:`danger-'El archivo cargado no es una imagen'`});
    return;
  }
  //variable que almacena el archivo seleccionado
  this.img_files =$event.target.files[0];
  //lee el archivo en base 64
  let reader = new FileReader();
  reader.readAsDataURL(this.img_files);
  reader.onloadend = () => this.img_pre = reader.result;
  }

  addImages(){
    if(!this.img_files){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'DEBES AGREGAR UNA IMAGEN'`});
      return;
    }
    let formData = new FormData();
    formData.append("product_id",this.product_id);
    formData.append("file",this.img_files)
    this._productService.addImagenProduct(formData).subscribe((resp:any) => {
      this.img_files = null;
      this.img_pre = null;
      //para poner de primero la imagen nueva
      this.images_files.unshift(resp.imagen);
    })
  }
  
  removeImages(imagen_){
    //this.images_files.splice(index,1);
    const modalRef = this.modelService.open(DeleteImagenPComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.imagen_ = imagen_;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.ImagenE.subscribe((resp:any) => {
      //busca la imagen por ID y la elimina a visualmente
      let INDEX = this.images_files.findIndex(item => item.id == resp.id);
      this.images_files.splice(INDEX,1);
    })
  }

  createProduct(){
    //validación de los campos obligatorios
    if(! this.title ||
      ! this.sku ||
      ! this.categorie_id ||
      ! this.price_colones ||
      ! this.price_usd ||
      ! this.resumen ||
      ! this.description){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'TODOS LOS CAMPOS SON OBLIGATORIOS'`});
      return;
    }

    //se pasan las variables a formData
    let formData = new FormData();
    formData.append("title",this.title);
    formData.append("sku",this.sku);
    formData.append("categorie_id",this.categorie_id);
    formData.append("price_colones",this.price_colones);
    formData.append("price_usd",this.price_usd);
    formData.append("resumen",this.resumen);
    formData.append("description",this.description);
    formData.append("imagen_file",this.imagen_file);
    formData.append("tags",this.tags);
    formData.append("stock",this.stock_individual ? this.stock_individual : 0);
    formData.append("type_inventario",this.checked_inventario);
    formData.append("state",this.state);

    //para enviar un grupo de imagenes por medio del formData
    //let index = 0;
    //for(const imagen of this.images_files){
    //  formData.append("files["+index+"]",imagen.file);
    //  index++;
    //}

    this._productService.updateProduct(this.product_id,formData).subscribe((resp:any) => {
      console.log(resp);
      this.toaster.open(NoticyAlertComponent,{text:`primary-'SE REGISTRÓ LOS CAMBIOS DEL PRODUCTO'`});
    })

    

    this._productService.createProduct(formData).subscribe((resp:any) => {
      console.log(resp);
      this.toaster.open(NoticyAlertComponent,{text:`primary-'EL PRODUCTO SE REGISTRO CORRECTAMENTE.'`});
      this.title = null;
      this.sku = null;
      this.categorie_id = null;
      this.price_colones = null;
      this.price_usd = null;
      this.resumen = null;
      this.description = null;
      this.imagen_file = null;
      this.imagen_pre = null;
      this.tags = [];
      this.images_files = [];
    })
  }

  //para seleccionar el tipo de inventario
  checkedInventario(value){
    this.checked_inventario = value;
  }

  //condición para mostrar la talla
  changeTalla(value){
    if(value){
      this.is_selected_dimension = false;
    }else{
      this.is_selected_dimension = true;
    }
  }

  addInventario() {
    if(!this.product_size_id){
      if(!this.new_nombre){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'TIENES QUE INGRESAR EL TAMAÑO DE LA TALLA'`});
        return;
      }
    }
    if(!this.product_color_id){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'TIENES QUE SELECCIONAR UN COLOR'`});
        return;
    }
    if(!this.stock){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'TIENES QUE INGRESAR EL STOCK'`});
      return;
    }
    let data = {
      product_id: this.product_id,
      product_color_id: this.product_color_id,
      product_size_id: this.product_size_id,
      new_nombre: this.new_nombre,
      stock: this.stock,
    }
    this._productService.addInvetario(data).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'${resp.text_message}'`});
        return;
      }else{
        this.toaster.open(NoticyAlertComponent,{text:`primary-'SE REGISTRÓ CORRECTAMENTE LA CONFIGURACIÓN'`});
        this.product_color_id = null;
        this.product_size_id = null;
        this.new_nombre = null;
        this.stock = null;
        //Verifica si existe findIndex
        let INDEX = this.product_inventaries.findIndex(item => item.id == resp.product_size_color.id);
        //Si existe coloca las respuesta
        if(INDEX != -1){
          this.product_inventaries[INDEX] = resp.product_size_color;
        }else{
          //sino lo agrega
          this.product_inventaries.push(resp.product_size_color);
        }
      }
    })
  }


  OPENEDIT(inventario){
    const modalRef = this.modelService.open(EditItemInventarioComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.inventario = inventario;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.inventarioG.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.product_inventaries.findIndex(item => item.id == resp.id);
      if(INDEX!=-1){
        this.product_inventaries[INDEX] = resp;
      }
    })
  }
  OPENEDELETE(inventario){
    const modalRef = this.modelService.open(DeleteItemInventarioComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.inventario = inventario;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.inventarioG.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.product_inventaries.findIndex(item => item.id == resp.id);
      if(INDEX!=-1){
        this.product_inventaries.splice(INDEX,1);
      }
    })
  }

  OPENEDITSUB(sub_inventario,inventario){
    const modalRef = this.modelService.open(EditSubItemInventarioComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.sub_inventario = sub_inventario;
    modalRef.componentInstance.inventario = inventario;
    modalRef.componentInstance.products_colors = this.products_colors;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.inventarioG.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.product_inventaries.find(item => item.id == inventario.id).variaciones.findIndex(item => item.id == resp.id);
      if(INDEX!=-1){
        this.product_inventaries.find(item => item.id == inventario.id).variaciones[INDEX] = resp;
      }
    })
  }
  
  OPENEDELETESUB(sub_inventario,inventario){
    const modalRef = this.modelService.open(DeleteSubItemInventarioComponent, {centered : true, size: 'sm'});
    modalRef.componentInstance.sub_inventario = sub_inventario;
    modalRef.result.then(
      () => {

      },
      () => {
        
      }
    )
    modalRef.componentInstance.inventarioG.subscribe((resp:any) => {
      console.log(resp);
      let INDEX = this.product_inventaries.find(item => item.id == inventario.id).variaciones.findIndex(item => item.id == resp.id);
      if(INDEX!=-1){
        this.product_inventaries.find(item => item.id == inventario.id).variaciones.splice(INDEX,1);
      }
    })
  }


}
