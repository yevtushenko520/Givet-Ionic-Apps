import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FavoriteViewPage } from '../favorite-view/favorite-view';
import { DatabaseProvider } from '../../providers/database/database';

import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the UserFavlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-favlist',
  templateUrl: 'user-favlist.html',
})
export class UserFavlistPage {
  data:Observable<any>;
  items:any;
  url:string;
  ides:string;
  loading:any;
  queryText:string;
  public searchBar = false;

  fav_eng:any;
  products_eng:any;
  devs = [];
  dev = {};

  user_id_2:string;
fp_id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {
    this.ides = navParams.get('id');
    this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id="+this.ides;
    this.getData();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  loadDB(){
    this.presentLoadingDefault();
   this.databaseProvider.getUsers().then(data =>{
   this.dev  = data;

//      alert(JSON.stringify(this.dev[0]['fp_id']));

     this.fp_id = this.dev[0]['fp_id'];
     this.user_id_2 = this.dev[0]['user_id'];


     this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
     this.data = this.http.get(this.url);
     this.data.subscribe(data => {
       
       
       this.fav_eng = data['fav'];
       this.products_eng = data['product'];
   
     });
 
   
   })
 }

  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }

   

      this.loading.dismiss();

      this.loadDB();
    })

    this.loading.dismiss();
  }


  
  updateText(ev){
 
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_fav.php?fav_name="+this.queryText+"&user_id="+this.ides;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
  
      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
     

      
    })

  }

  }

  backTo(){


   
    this.navCtrl.setRoot(UserProfilePage,{
      ides:this.ides
     });
 
  
}

  cancelSearch(){

    this.searchBar=false;
    this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id="+this.ides;
    this.getData();

  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id="+this.ides;
    this.getData();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  moToView(item){
    this.navCtrl.push(FavoriteViewPage,{
      id:item['id'],
      ides:this.ides,
      res:1
    });
  }

}
