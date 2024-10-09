import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileClientService } from '../../_services/profile-client.service';
import { AuthService } from 'src/app/modules/auth-profile/_services/auth.service';

declare function alertDanger([]): any;

@Component({
  selector: 'app-profile-client-home',
  templateUrl: './profile-client-home.component.html',
  styleUrls: ['./profile-client-home.component.scss']
})
export class ProfileClientHomeComponent implements OnInit {

  selectorMenu:any = 0;
  user:any;

  //variables de componentes
  user_selected:any;
  listAdrees:any = [];
  listOrders:any = [];
  listReviews:any = [];
  //wishLists:any = [];
  selected_menu:any = null;

  constructor(
    public _profileHomeService: ProfileClientService,
    public ativerouter:ActivatedRoute,
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    if (this.authService.user == null && this.authService.token == '')
    {
      alertDanger("DEBES ESTAR LOGUEADO");
      this.router.navigate(["/auth/login"]);
    }
    if(!this.authService.user && !this.authService.token){
      alertDanger("DEBES ESTAR LOGUEADO");
      this.router.navigate(["/auth/login"]);
    }

    this.ativerouter.queryParams.subscribe((resp:any) => {
      this.selected_menu = resp["selected_menu"];
    })
    this.user = this._profileHomeService._authServices.user;
    this._profileHomeService.listInforGeneralClient().subscribe((resp:any)=>{
      console.log(resp);
      if(this.selected_menu){
        this.selectorMenu = this.selected_menu;
      }else{
        this.selectorMenu = 1;
      }
      this.user_selected = resp.user;
      this.listAdrees = resp.address;
      this.listOrders = resp.orders.data;
      this.listReviews = resp.reviews;
      //this.wishLists = resp.wishlists;
    })
  }
  
  selectedMenu(value:any){
    this.selectorMenu = value;
  }

  logout()
    {
      this.authService.logout();
    }

}
