import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CategorieService } from 'src/app/modules/categorie/_services/categorie.service';
import { SlidersService } from '../../_service/sliders.service';

@Component({
  selector: 'app-add-sliders-new',
  templateUrl: './add-sliders-new.component.html',
  styleUrls: ['./add-sliders-new.component.scss']
})
export class AddSlidersNewComponent implements OnInit {

  @Output() sliderE: EventEmitter<any>= new EventEmitter(); //Envia clientsE hasta categorie-list
  isLoading: boolean = false;
  isLoading$: any;

  name:any = null;
  url:any = null;
  imagen_file:any = null;
  imagen_previzualiza:any = null;

  constructor(
    public modal: NgbActiveModal,
    //importar y crear la instancia de categorie services
    public _slidersService: SlidersService, 
    //importar y crear la instancia para notificaciones
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$= this._slidersService.isLoading$;
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
    reader.onloadend = () => this.imagen_previzualiza = reader.result;
    //retraso de 25ms para que se muestre
    //setTimeout(()=>{
    //  //console.log(this.imagen_pre);
    //},25);
  }

  save(){
    let formData = new FormData();
    formData.append("imagen_file",this.imagen_file);
    formData.append("name",this.name);
    formData.append("Url",this.url);
    this._slidersService.createSlider(formData).subscribe((resp:any)=>{
      //console.log(resp);
      this.sliderE.emit(resp.categorie);
      this.toaster.open(NoticyAlertComponent,{text:`primary-'Nuevo Slider guardado'`});
      this.modal.close();
    })
  }

}
