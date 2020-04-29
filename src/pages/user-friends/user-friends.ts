import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { DatabaseProvider } from '../../providers/database/database';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the UserFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-friends',
  templateUrl: 'user-friends.html',
})
export class UserFriendsPage {

  data:Observable<any>;
  data2:Observable<any>;
  
  url:string;
  url2:string;
  ids:string;
  items:any=[];
  loading:any;
  public searchBar = false;
  friends_eng:any;


  dev = [];
  user_id_2:string;
  fp_id:string;


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {
    this.ids = navParams.get('id');
    
    this.loadDB();
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  loadDB(){
   
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        this.friends_eng = data['friend'];
    
      })

      
      this.url = "http://api.givet.co.uk/api/my_friend.php?user_id="+this.ids;
      this.getData();

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
    })
  }

  openModal(item) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:item['id']
    });
  }

  

}
