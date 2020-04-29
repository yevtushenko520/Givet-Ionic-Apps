import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SettingGiftProfilePage } from '../setting-gift-profile/setting-gift-profile';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the GiftProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gift-profile',
  templateUrl: 'gift-profile.html',
})
export class GiftProfilePage {


  data:Observable<any>;
  items:any;
  url:any;
  ids:any;


  
  lang:any;

  dev = [];
  devs = {};
  
  user_id:any;
  fp_id:any;

  shoes:string;
  casual:string;
  pants:string;
  jackets:string;
  dress:string;
  hat:string;
  rand_1:string;
  rand_2:string;
  rand_3:string;
  rand_4:string;
  culture:string;
  hobbies:string;
  what_not:string;
  when_it:string;


  shoes_eng:any;
  casual_eng:any;
  pants_eng:any;
  jackets_eng:any;
  dress_eng:any;
  hat_eng:any;
  
  culture_eng:any;
  hobbies_eng:any;
  what_not_eng:any;
  when_it_eng:any;
  gift_profile:any;

  loading:any;
  reset:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient
    ,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {
    this.ids = navParams.get('id');
   
  }

  
  ionViewDidEnter() {
   
    this.loadDB();
}

  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.anyify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id = this.dev[0]['user_id'];

      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
      

        this.shoes_eng = data['shoes'];
        this.casual_eng = data['casual'];
        this.pants_eng = data['pants'];
        this.jackets_eng = data['jackets'];
        this.dress_eng = data['dress'];
        this.hat_eng = data['hat'];
      
        this.culture_eng = data['cult'];
        this.hobbies_eng = data['hob'];
        this.what_not_eng = data['what_not'];
        this.when_it_eng = data['what_it'];
        this.gift_profile = data['gift'];
    
      })


      this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id="+this.user_id;
      this.getData();

    })
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

    

      this.shoes = data['shoes'];
      this.casual = data['casual'];
      this.pants = data['pants'];
      this.jackets = data['jackets'];
      this.dress = data['dress'];
      this.hat = data['hat'];
      this.rand_1 = data['rand_1'];
      this.rand_2 = data['rand_2'];
      this.rand_3 = data['rand_3'];
      this.rand_4 = data['rand_4'];
      this.culture = data['culture'];
      this.hobbies = data['hobbies'];
      this.what_not = data['what_not'];
      this.when_it = data['when_it'];
      
      this.loading.dismiss();
      
    })

    //this.loading.dismiss();
    
  }

  moToSetting(){
    this.navCtrl.push(SettingGiftProfilePage,{
      id:this.ids
    });
  }
 

}
