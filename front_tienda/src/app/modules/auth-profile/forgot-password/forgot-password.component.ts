import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

declare function  alertDanger([]):any;
declare function alertSuccess([]):any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  email: any;

  
  constructor(private authService: AuthService) {
  }
  

  fogortPassword() {

    if (this.email === '') {
      alertDanger("INGRESE UN EMAIL.");
      return;
    }

    this.authService.forgotPassword(this.email)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa de la API
          if (response && response.message) {
            alertSuccess('SI EL USUARIO CON EL CORREO INGRESADO EXISTE SE LE ENVIARA UN EMAIL CON LAS INSTRUCCIONES.')
            setTimeout(() => {
              // Cambia la URL a la que deseas redirigir al usuario
              window.location.href = '/'; // Cambia '/inicio-de-sesion' a la URL deseada
            }, 4000);
          } else {
            // En caso de respuesta inesperada de la API
            console.error('Respuesta inesperada de la API:', response);
          }
        },
        (error: any) => {
          // Manejar errores de la API
          console.error('Error al llamar a la API:', error);
        }
      );
  }
}
