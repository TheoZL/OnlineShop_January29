import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CategorieService } from '../../categorie/_services/categorie.service';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

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

  constructor(
    public toaster:Toaster,
    public _productService: ProductsService, //para prueba eliminar al terminar
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._productService.isLoading$;
    this._productService.getInfo().subscribe((resp:any)=>{
      this.categories = resp.categories;
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
    this.images_files.push({
      file: this.img_files,
      show: this.img_pre,
    });
    this.img_files = null;
    this.img_pre = null;
  }
  
  removeImages(index){
    this.images_files.splice(index,1);
  }

  createProduct(){
    //validación de los campos obligatorios *******
    if(! this.title ||
      ! this.sku ||
      ! this.categorie_id ||
      ! this.price_colones ||
      ! this.price_usd ||
      ! this.resumen ||
      ! this.description ||
      ! this.imagen_file){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'TODOS LOS CAMPOS SON OBLIGATORIOS'`});
      return;
    }
    if(this.images_files.length == 0){
      this.toaster.open(NoticyAlertComponent,{text:`danger-'DEBES INGRESAR UN CONJUNTO DE IMAGENES'`});
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

    //para enviar un grupo de imagenes por medio del formData
    let index = 0;
    for(const imagen of this.images_files){
      formData.append("files["+index+"]",imagen.file);
      index++;
    }

    this._productService.createProduct(formData).subscribe((resp:any)=>{
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
      this.imagen_pre= null;
      this.tags = [];
      this.images_files = [];
    })
  }
}


