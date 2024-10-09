import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from "ng-recaptcha";

declare function  alertDanger([]):any;
declare function alertSuccess([]):any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: any = null;
  password: any = null;
  checkacept: boolean = false;
  checkcaptcha: boolean = false;

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
   

  // Subject para cancelar la suscripción
  private unsubscribe$ = new Subject<void>(); 
  //Constructor
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    // Lógica de inicialización del componente
    //si existe usuario y token redirige a la pagina principal
    if (this.authService.user != null && this.authService.token != '')
    {
      this.router.navigate(["/"]);
    }
    if(this.authService.user && this.authService.token){
      this.router.navigate(["/"]);
    }
  }

  onChange(event: any) {
    this.checkacept = !this.checkacept;
  }

  ngOnDestroy(): void {
    // Emitir señal de completado al Subject
    this.unsubscribe$.next();
    // Completar el Subject y limpiar recursos
    this.unsubscribe$.complete(); 
  }

  login(): void {

    if (!this.checkcaptcha){
      alertDanger("RESUELVE LA CAPTCHA.");
      return;
    }
    // Si falta algún dato se alerta al usuario mediante alert js
    if (!this.email || !this.password) {
      alertDanger("REVISA LOS DATOS.");
      return;
    }

    // Se llama la función del authService en modules
    this.authService.login(this.email, this.password)
      .pipe(takeUntil(this.unsubscribe$)) // Cancelar la suscripción cuando se destruye el componente
      .subscribe((resp: any) => {
        // Manejar la respuesta del servicio de autenticación aquí

        // Si la respuesta no contiene errores y devuelve true
        if (!resp.error && resp) {
          // Realizar acciones necesarias para una respuesta exitosa
          alertSuccess("¡BIENVENIDO!");
          document.location.reload();
        } else {
          //manejar alertas personalisadas
          if (resp.error.error == 'Unauthorized' || resp.error.message == 'Unauthenticated') {
            alertDanger("El usuario y/o contraseña son incorrectos.");
          } 
          //manejar alertas generales
          else {
            alertDanger("Credenciales invalidas.");
          }
        }
      }, (error) => {
        // Manejar el error del servicio de autenticación aquí
        alertDanger("ERROR AL IDENTIFICAR.");
      });
  }
}
