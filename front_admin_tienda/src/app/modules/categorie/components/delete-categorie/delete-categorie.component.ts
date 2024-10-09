import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CategorieService } from '../../_services/categorie.service';

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.scss']
})
export class DeleteCategorieComponent implements OnInit {

  isLoading$;
  isLoading: false;

  // se genera la instancia
@Input() categoria_selected:any = null;
@Output() clientsE: EventEmitter<any>= new EventEmitter(); //Envia usersE hasta user-list

  constructor(
    //importar y crear la instancia de categorias services
    public _categoriaService: CategorieService,
    //importar y crear la instalncia de formularios
    public modal: NgbActiveModal,
    //importar y crear la instancia para notificaciones
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$= this._categoriaService.isLoading$;
  }

  delete(){
    //se llama el metodo de delete
    this._categoriaService.deleteCategoria(this.categoria_selected.id).subscribe((resp:any)=>{
      //console.log(resp);
      this.modal.close();
      this.toaster.open(NoticyAlertComponent,{text:`danger-'La categoría ha sido eliminado correctamente'`});
      this.clientsE.emit(this.categoria_selected);
    })
  }

}
