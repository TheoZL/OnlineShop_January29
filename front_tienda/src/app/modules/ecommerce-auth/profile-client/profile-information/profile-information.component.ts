import { Component, Input, OnInit } from '@angular/core';
import { ProfileClientService } from '../../_services/profile-client.service';

declare function  alertDanger([]):any;
declare function alertSuccess([]):any;
@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {

  @Input() user_selected:any;

  name:any = null;
  lastname:any = null;
  birthday:any = null;
  gender:any = null;
  email:any = null;
  phone:any = null;

  imagen_file:any = null;
  imagen_pre:any = null;

  constructor(
    public _profileHomeService: ProfileClientService,
  ) { }

  ngOnInit(): void {

    this.name = this.user_selected.name;
    this.lastname = this.user_selected.lastname;
    this.birthday = this.user_selected.birthday;
    this.gender = this.user_selected.gender;
    this.email = this.user_selected.email;
    this.phone = this.user_selected.phone;

    console.log(this.user_selected);
  }

  processFile($event:any){
    if($event.target.files[0].type.indexOf("image") < 0){
      alertDanger('EL ARCHIVO CARGADO NO ES UNA IMAGEN');
      return;
    }
    this.imagen_file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imagen_file);
    reader.onloadend = () => this.imagen_pre = reader.result;
  }

  save(){
    if(!this.name){
      alertDanger('EL NOMBRE ES OBLIGATORIO');
      return;
    }
    if(!this.lastname){
      alertDanger('EL APELLIDO ES OBLIGAROIO');
      return;
    }
    if(!this.birthday){
      alertDanger('LA FECHA DE CUMPLEAÑOS ES OBLIGATORIO');
      return;
    }
    if(!this.email){
      alertDanger('EL EMAIL ES OBLIGATORIO');
      return;
    }
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("lastname",this.lastname);
    formData.append("birthday",this.birthday);
    formData.append("gender",this.gender);
    formData.append("email",this.email);
    if(this.phone){
      formData.append("phone",this.phone);
    }
    if(this.imagen_file){
      formData.append("imagen",this.imagen_file);
    }
    this._profileHomeService.updateProfile(formData).subscribe((resp:any) => {
      console.log(resp);
      this.user_selected = resp.user;
      alertSuccess("GENIAL SE REGISTRARON TUS CAMBIOS CORRECTAMENTE");
    });
  }

}
