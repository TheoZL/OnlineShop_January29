import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Route, Router } from '@angular/router';

declare function  alertDanger([]):any;
declare function alertSuccess([]):any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  //se declaran las variables utilizadas en el html para el form
  name:any = null;
  lastname:any = null;
  email:any = null;
  password:any = null;
  verify_password:any = null;
  checkacept: boolean = false;
  checkcaptcha: boolean = false;

  constructor(
    //se crea el authService para acceder a sus funciones
    public authService:AuthService,
    public router: Router,
  )
  {}

  public resolved(captchaResponse: string): void {
    if (captchaResponse && captchaResponse.trim() !== '') {
      //console.log(`Captcha resolved successfully with response: ${captchaResponse}`);
      // Realiza aquí cualquier acción que debas hacer en caso de éxito.
      this.checkcaptcha = true;
    } else {
      //console.log(`Captcha resolution failed.`);
      // Realiza aquí cualquier acción que debas hacer en caso de fallo.
      alertDanger("ERROR EN LA CAPTCHA.");
    }
  }

  ngOnInit(): void 
  {
    //si existe usuario y token redirige a la pagina principal
    if (this.authService.user != null && this.authService.token != '')
    {
      this.router.navigate(["/"]);
    }
  }

  onChange(event: any) {
    this.checkacept = !this.checkacept;
  }

  
  register()
  {

    if (!this.checkacept == true) {
      alertDanger("DEBES ACEPTAR LOS TÉRMINOS Y CONDICIONES.");
      return;
    }
    //se verifica que todos los campos esten con datos
    if (!this.name || 
      !this.lastname ||
      !this.email ||
      !this.password ||
      !this.verify_password) {
        alertDanger("COMPLETA TODOS LOS DATOS REQUERIDOS DEL FORMULARIO.");
      return;
    }
    //Si las contrase►4as no coinciden
    if (this.password != this.verify_password) {
      alertDanger("Las contraseñas no coinciden.");
      return;
    }

    if (!this.checkcaptcha) {
      alertDanger("RESUELVE LA CAPTCHA..");
      return;
    }
    //Se crea el array para enviar los datos al register
    let data = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      verify_password: this.verify_password,
      type_user: 1,
    };
    //Se llama la funcion de registro en el authService y se muestra la informacion en consola para verificar la creacion de la cuenta
    this.authService.register(data).subscribe((resp:any) => {console.log(resp)});
    //redirige la app a login para que el usuario pueda logear con la cuenta creada.
    alertSuccess("REGISTRO COMPLETADO.")
    this.router.navigate(["auth/login"]);
  }
}
