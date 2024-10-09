import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../_services/users.service';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  isLoading$;
  isLoading: false;

  // se genera la instancia
@Input() user_selected:any = null;
@Output() usersE: EventEmitter<any>= new EventEmitter(); //Envia usersE hasta user-list

  constructor(
    //importar y crear la instancia de User services
    public _userService: UsersService,
    //importar y crear la instalncia de formularios
    public modal: NgbActiveModal,
    //importar y crear la instancia para notificaciones
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$= this._userService.isLoading$;
  }

  delete(){
    //se llama el metodo de delete
    this._userService.deleteUser(this.user_selected.id).subscribe((resp:any)=>{
      console.log(resp);
      this.modal.close();
      this.toaster.open(NoticyAlertComponent,{text:`danger-'El usuario ha sido eliminado correctamente'`});
      this.usersE.emit(this.user_selected);
    })
  }

}
