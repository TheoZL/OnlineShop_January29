import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_SERVICES } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Inicializar las variables que necesitamos
  //se inicializa sin tipo
  user:any;
  //se inicializa vacio y tipo string
  token:any = '';

  constructor(

    //se declara la variable http que hereda del http client
    private http: HttpClient,
    //se crea la variable route que hereda de Route.
    private router: Router,
  ) { 
    //Aqui se carga el usuario y el token
    //se llama la funcion para verificar el token en local storage del navegador
    this.localStorage();
  }

  //verifica si existe un token en el local storage del navegador
  localStorage(){
    if (localStorage.getItem('token'))
    {
      this.token = localStorage.getItem('token');
      //convertimos el string del local en json para facil lectura, si el user es null se da vacio
      this.user = JSON.parse(localStorage.getItem('user') ?? '');
    }
    //si no existe el token, retorna null
    else {
      this.token = '';
      this.user = null;
    }
  }


  login(email: string, password: string) 
  {
    //se declara la url del api y la funcion a consultar, login
    let URL = URL_SERVICES + '/users/login_ecommerce';
    //se declara el end point a la url del api por medio de post y se le agrega como cuerpo
    //el email y el password
    return this.http.post(URL,{email,password}).pipe(
      //aqui se mapea la respuesta antes de enviar.
      map((resp:any) => {
        //se verifica si la respuesta contiene el token
        if (resp.access_token){
          //almacenar la informacion en localstorage y retorna true o false
          return this.saveTokenstorage(resp);
        }
        else {
          return resp;
        }
      }),
      //aqui se gestiona el catch error
      catchError((err:any) => {
        return of(err);
      })
    );
  }

  //esta funcion almacena el token en el localstorage
  saveTokenstorage(resp: any) {
    if (resp.access_token && resp.user){
      //almacenar el token en una linea
      localStorage.setItem('token',resp.access_token);
      //almacenar los datos de usuario, pero parceando el json a string para poder almacenar
      localStorage.setItem('user',JSON.stringify(resp.user));
      //se almacenan los datos en las variables globales
      this.user = resp.user;
      this.token = resp.access_token;
      //retorna true al finalizar
      return true;
    }
    return false;
  }


  register(data:any) 
  {
    //se declara la url del api y la funcion a consultar, registro
    let URL = URL_SERVICES + '/users/register';
    //se declara el end point a la url del api por medio de post y se le agrega como cuerpo
    //el email y el password
    return this.http.post(URL,data);
    
  }

  logout()
  {
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(["auth/login"]);
  }


  resetPassword(token: string, password: string, confirmPassword: string,email: string) {
    const body = {
      password: password,
      password_confirmation: confirmPassword,
      token: token,
      email: email
    };
  
    // Configura las cabeceras para enviar JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    // Realiza la solicitud POST enviando el cuerpo como JSON
    let URL = URL_SERVICES + '/users/reset-password';
    return this.http.post(URL, JSON.stringify(body), { headers: headers }).pipe(
      catchError((error: any) => {
        // Maneja errores aquí
        console.error(error);
        return of(error);
      })
    );
  }

  forgotPassword(email: string) {
    const body = {
      email: email
    };
  
    // Configura las cabeceras para enviar JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    // Realiza la solicitud POST enviando el cuerpo como JSON
    let URL = URL_SERVICES + '/users/forgot-password';
    return this.http.post(URL, JSON.stringify(body), { headers: headers }).pipe(
      catchError((error: any) => {
        
        return of(error);
      })
    );
  }
  

}
