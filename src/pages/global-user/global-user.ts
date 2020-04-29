import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UserProfilePage } from '../user-profile/user-profile';


/**
 * Generated class for the GlobalUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global-user',
  templateUrl: 'global-user.html',
})
export class GlobalUserPage {



  data:Observable<any>;
  data2:Observable<any>;
  
  dev = [];
  devs = {};
  
  user_id:string;
  fp_id:string;

  url:string;
  url2:string;
  ids:string;
  items:any=[];
  loading:any;
  public searchBar = false;
  queryText:string;
  person:any;
  personRegExp:any;


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public http:HttpClient
    ,public loadingCtrl: LoadingController) {

       this.person = "http";
      
      
        this.personRegExp = new RegExp(this.person);

      this.url = "http://api.givet.co.uk/api/get_all_users.php";
      this.getData();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.url = "http://api.givet.co.uk/api/get_all_users.php";
    this.getData();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  

  updateText(ev){
 
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_user.php?email="+this.queryText;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
  
     

      this.items = data;
    })

  }

  }

  cancelSearch(){

    this.searchBar=false;
    this.url = "http://api.givet.co.uk/api/get_all_users.php";
    this.getData();

  }


  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;

  
    this.loading.dismiss();
    })
  }


  openModal(item) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:item['id']
    });
  }

}
