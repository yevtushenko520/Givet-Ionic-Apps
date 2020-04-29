import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DatabaseProvider } from '../../providers/database/database';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {


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
  lang:any;
  queryText:string;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public http:HttpClient
    ,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {
    this.ids = navParams.get('id');
  
    //this.loadDB();
  }

  
  ionViewDidEnter() {
    this.loadDB();
}
   
  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        this.lang = data['friend'];
    
      })

    
      this.url = "http://api.givet.co.uk/api/my_friend.php?user_id="+this.user_id;
      this.getData();

    })
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.loadDB();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  

  updateText(ev){
 
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_friend.php?user_id="+this.user_id+"&email="+this.queryText;
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

  cancelSearch(){

    this.searchBar=false;
    this.loadDB();

  }


  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
     

if(data['status']!="400 OK"){
  this.items = data;
}else{
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