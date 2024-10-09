import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../_services/users.service';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

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
    //se da referencia de userservices al thisloadin en add users
    this.$isLoading = this._userService.isLoading$;
    //se carga la funcion de carga para formulario
    this.loadForm();
  }


  loadForm(){
    //se declara el formulario a fb grupo
    this.formGroup = this.fb.group(
      {
        //se crea el campo name con requerido y un minimo de 3 caracteres.
        name: [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(99)])],
        //se crea el campo para apellido con los valores de requerido y caracteres
        lastname: [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(99)])],
        //se crea el campo email nulo, pero se verifica que sea requerido y tipo email
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.maxLength(249),
          ])
        ],
        type_user: [1], // verificar despues [[[[[[[[[[[[]]]]]]]]]]]]
        role_id: ['1'],
        password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(249),
          ])
        ],
        rpassword: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(249),
          ])
        ],
      }
    )
  }

  save()
  {
    //se validan las contraseñas
    if (this.formGroup.value.password != this.formGroup.value.rpassword)
    {
      //alert("Las contraseñas no coinciden.");
      //html con las notificaciones flotantes
      this.toaster.open(NoticyAlertComponent,{text:`warning-'Las contraseñas no coinciden.'`}); //se puede editar en app.module.ts
      return;
    }
    //se llama el metodo de registro, enviando los datos del formulario. recibiendo la respuesta
    this._userService.register(this.formGroup.value).subscribe((resp:any)=>{
    console.log(resp);
    
    if (resp.message == 400)
    {
      //alert("El usuario ya esta registrado");
      this.toaster.open(NoticyAlertComponent,{text:`danger-'El usuario ya esta registrado.'`});
      return;
    }
    else {
      //alert("El usuario se a registrado correctamente.");
      this.toaster.open(NoticyAlertComponent,{text:`primary-'El usuario se ha registrado correctamente.'`});
      //cierra la ventana de registro
      this.modal.close();
      //emite la respuesta del usuario registrado con usersE
      this.usersE.emit(resp.user);
      return;
    }

  })
  }


  //este codigo es de metronic. para que los campos se muestren en rojo si no estan completos
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
