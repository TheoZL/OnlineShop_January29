import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../_services/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUsersComponent } from '../components/add-users/add-users.component';
import { EditUsersComponent } from '../components/edit-users/edit-users.component';
import { DeleteUserComponent } from '../components/delete-user/delete-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  //creación de variables
  isLoading$;
  $isLoading: false;
  
  totalPages= 1;
  currentPage= 1;

  state:any = '';
  search:any =''; 

  users:any=[];

  constructor(
    //importar y crear la instalncia de formularios
    public fb:FormBuilder,
    //importar y crear la instancia de User services
    public _userService: UsersService,
    //importar y crear la instancia de bootstrap
    public modelServices: NgbModal,
  ) { }

  ngOnInit(): void {
    //se da referencia de userservices al thisloading en users-list
    this.isLoading$ = this._userService.isLoading$;
    this.allUsers();
  }

    //función para mostrar la lista de usuarios
  allUsers(page=1){
    this._userService.allUsers(page,this.state,this.search).subscribe((resp:any) => { 
      console.log(resp);
      this.users = resp.users.data;
      this.totalPages= resp.total;
      this.currentPage = page;
    })
  }

  //función para la creación de usuarios
  addUser(){
    //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en user/componente/add-user
    const modalRef = this.modelServices.open(AddUsersComponent, {centered : true, size: 'md'});
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    //instancia que conecta con el usersE y recibe la respuesta por medio del subscribe 
    //cierra la ventana de registro
    modalRef.componentInstance.usersE.subscribe((resp:any)=>{
      console.log(resp);
      //Le da el estado activo al usuario creado
      resp.state=1;
      //actualiza la lista de usuarios
      this.users.unshift(resp);
    })
  }

  editUser(user){
    //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en user/componente/add-user
    const modalRef = this.modelServices.open(EditUsersComponent, {centered : true, size: 'md'});
    //se envia un parametro
    modalRef.componentInstance.user_selected = user;
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    //instancia que conecta con el usersE y recibe la respuesta por medio del subscribe 
    //cierra la ventana de registro
    modalRef.componentInstance.usersE.subscribe((resp:any)=>{
      console.log(resp);
      //busca el registro y lo edita
      let INDEX = this.users.findIndex(user=>user.id == resp.id);
      this.users[INDEX]= resp;
  })
}

  delete(user){
        //se declaran las propiedades de bootstrap para la visualización
    //el componente se encuentra en user/componente/add-user
    const modalRef = this.modelServices.open(DeleteUserComponent, {centered : true, size: 'md'});
    //se envia un parametro
    modalRef.componentInstance.user_selected = user;
    //aqui se marcan las acciones al iniciar
    modalRef.result.then(

      () => {

      },
      () => {

      },
    )
    //instancia que conecta con el usersE y recibe la respuesta por medio del subscribe 
    //cierra la ventana de registro
    modalRef.componentInstance.usersE.subscribe((resp:any)=>{
      console.log(resp);
      //busca el usuario y lo elimina
      let INDEX = this.users.findIndex(user=>user.id == resp.id);
      this.users.splice(INDEX,1);
  })
  }

reset(){
  this.state = '';
  this.search = '';
  this.allUsers();
}
  

  loadPage(index){
    this.allUsers(index);
  }


}
