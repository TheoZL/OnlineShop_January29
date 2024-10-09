import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    public authService: AuthService,
    public router: Router,
  )
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {

      //si el usuario o token no existen
      // if (this.authService.user == null && this.authService.token == '')
      // {
      //   this.router.navigate(["auth/login"]);
      //   return false;
      // }
      if(!this.authService.user && !this.authService.token){
        this.router.navigate(["auth/login"]);
        return false;
      }
      //si existen, se declaran las variables 
      let token = this.authService.token;
      //se desarma el token y selecciona el item 2, a ese item se le extrae la expiracion
      let expiration = (JSON.parse(atob(token.split('.')[1]))).exp;
      //se verifica la expiracion del token
      if (Math.floor((new Date).getTime() / 10000) >= expiration)
      {
        //si el token expiro realiza un logout
        this.authService.logout();
        return false;
      }
      //si todo esta bien devuelve true
      return true;
}
}
export { AuthService };

