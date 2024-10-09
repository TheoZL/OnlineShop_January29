import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

declare function  alertDanger([]):any;
declare function alertSuccess([]):any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  token: any;
  email: any;
  tokenData: any;
  
  constructor(private authService: AuthService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.tokenData = params['token'];
        this.email = params['email'];
      }
    });
  }
  

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      alertDanger("LAS CONTRASEÑAS NO COINCIDEN.");
      return;
    }

    if (this.password === '' || this.confirmPassword === '') {
      alertDanger("LAS CONTRASEÑAS NO PUEDEN ESTAR VACIAS.");
      return;
    }
    if (typeof this.password !== 'string') {
      console.error('La contraseña no es una cadena de texto válida');
      return;
    }
    this.authService.resetPassword(this.tokenData, this.password, this.confirmPassword,this.email)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa de la API
          if (response && response.message) {
            alertSuccess('CONTRASEÑA CAMBIADA. SERÁS REDIRIGIDO AL INICIO DE SESIÓN.')
            setTimeout(() => {
              // Cambia la URL a la que deseas redirigir al usuario
              window.location.href = '/auth/login'; // Cambia '/inicio-de-sesion' a la URL deseada
            }, 3000);
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
