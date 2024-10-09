import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { CategorieService } from '../../_services/categorie.service';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { URL_BACKEND } from 'src/app/config/config';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss']
})
export class EditCategorieComponent implements OnInit {

  @Output() clientsE: EventEmitter<any>= new EventEmitter(); //Envia clientsE hasta categorie-list
  isLoading: boolean = false;
  isLoading$: any;

  name:any = null;
  icono:any = null;
  imagen_file:any = null;
  imagen_pre:any = null;

  @Input() categoria_selected:any;

  constructor(
    public modal: NgbActiveModal,
    //importar y crear la instancia de categorie services
    public _categorieService: CategorieService, 
    //importar y crear la instancia para notificaciones
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$= this._categorieService.isLoading$;
    this.name = this.categoria_selected.name;
    this.icono = this.categoria_selected.icono;
    this.imagen_pre = URL_BACKEND+'storage/'+this.categoria_selected.imagen; //ruta de la imagen 
  }

  //filtro para que solo se seleccionen imagenes
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
    //retraso de 25ms para que se muestre
    //setTimeout(()=>{
    //  //console.log(this.imagen_pre);
    //},25);
  }

  save(){
    let formData = new FormData();
    formData.append("imagen_file",this.imagen_file);
    formData.append("name",this.name);
    formData.append("icono",this.icono);
    this._categorieService.updateCategoria(this.categoria_selected.id,formData).subscribe((resp:any)=>{
      //console.log(resp);
      //hace que la pagina actualice la lista, y agrege el editado al inicio
      this.clientsE.emit(resp.categorie);
      this.toaster.open(NoticyAlertComponent,{text:`primary-'La Categoría se actualizó correctamente'`});
      this.modal.close();
    })
  }
}
