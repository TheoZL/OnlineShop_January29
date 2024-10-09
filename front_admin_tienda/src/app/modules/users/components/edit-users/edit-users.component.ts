import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../_services/users.service';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
// se genera la instancia
@Input() user_selected:any = null;
@Output() usersE: EventEmitter<any>= new EventEmitter(); //Envia usersE hasta user-list


isLoading: any;
$isLoading: any;

formGroup: FormGroup;

constructor(

  public modal: NgbActiveModal,
  //importar y crear la instalncia de formularios
  public fb:FormBuilder,
  //importar y crear la instancia de User services
  public _userService: UsersService,
  //importar y crear la instancia de bootstrap
  public toaster: Toaster,
    //importar y crear la instancia para notificaciones

) { }

ngOnInit(): void {
  //se da referencia de userservices al thisloading en add users
  this.$isLoading = this._userService.isLoading$;
  //se carga la funcion de carga para formulario
  this.loadForm();
}


loadForm(){
  //se declara el formulario a fb grupo
  this.formGroup = this.fb.group(
    {
      //se crea el campo name con requerido y un minimo de 3 caracteres.
      name: [this.user_selected.name, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(99)])],
      //se crea el campo para apellido con los valores de requerido y caracteres
      lastname: [this.user_selected.lastname, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(99)])],
      //se crea el campo email nulo, pero se verifica que sea requerido y tipo email
      email: [this.user_selected.email,
          Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(249),
        ])
      ],
      state: [this.user_selected.state],
      role_id: [this.user_selected.role_id],
      // se hace referencia al id
      password: [
        null,
        Validators.compose([
          Validators.nullValidator,
          Validators.minLength(8),
          Validators.maxLength(249),
        ])
      ],
      rpassword: [
        null,
        Validators.compose([
          Validators.nullValidator,
          Validators.minLength(8),
          Validators.maxLength(249),
        ])
      ],
    }
  )
}

save(){
  if(this.formGroup.value.password && this.formGroup.value.rpassword)
  {
  //se validan las contraseñas
  if (this.formGroup.value.password != this.formGroup.value.rpassword)
    {
    //alert("Las contraseñas no coinciden");
    this.toaster.open(NoticyAlertComponent,{text:`warning-'Las contraseñas no coinciden.'`});
    return;
    }
  }
  //se llama el metodo de registro, enviando los datos del formulario. recibiendo la respuesta
  this._userService.update(this.user_selected.id,this.formGroup.value).subscribe((resp:any)=>{
  console.log(resp);
  
  if (resp.message == 400)
  {
    //alert("El usuario ya esta registrado");
    this.toaster.open(NoticyAlertComponent,{text:`danger-'El usuario ya esta registrado.'`});
    return;
  }
  else {
    //alert("El usuario se ha sido actualizado correctamente.");
    this.toaster.open(NoticyAlertComponent,{text:`primary-'El usuario se ha sido actualizado correctamente.'`});
    //cierra la ventana de de actualizar
    this.modal.close();
    //emite la respuesta del usuario registrado con usersE
    this.usersE.emit(resp.user);
    return;
  }

})
}


//este codigo es de metronic. para que los capos se muestren en rojo si no estan completos
isControlValid(controlName: string): boolean {
  const control = this.formGroup.controls[controlName];
  return control.valid && (control.dirty || control.touched);
}

isControlInvalid(controlName: string): boolean {
  const control = this.formGroup.controls[controlName];
  return control.invalid && (control.dirty || control.touched);
}

controlHasError(validation: string, controlName: string) {
  const control = this.formGroup.controls[controlName];
  return control.hasError(validation) && (control.dirty || control.touched);
}

isControlTouched(controlName: string): boolean {
  const control = this.formGroup.controls[controlName];
  return control.dirty || control.touched;
}

}
