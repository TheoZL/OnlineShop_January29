import { Injectable } from '@angular/core';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfileClientService {

  constructor(
    public _authServices: AuthService,
    public http: HttpClient,
  ) { }

  //Perfil
  listInforGeneralClient(){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/profile/home";
    return this.http.get(URL,{headers: headers});
  }
  updateProfile(data:any){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/profile/profile_update";
    return this.http.post(URL,data,{headers: headers});
  }
  // Review
  addReview(data:any){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/profile/reviews";
    return this.http.post(URL,data,{headers: headers});
  }
  updateReview(review_id:any,data:any){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/profile/reviews/"+review_id;
    return this.http.put(URL,data,{headers: headers});
  }

}
