import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { GiftProfilePage } from '../gift-profile/gift-profile';
/**
 * Generated class for the SettingGiftProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-gift-profile',
  templateUrl: 'setting-gift-profile.html',
})
export class SettingGiftProfilePage {


  
  dev = [];
  devs = {};
  lang:any;
  user_id_2:string;
  fp_id:string;

  data:Observable<any>;
  items:any;
  url:string;
  ids:string;

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


  shoes_eng:string;
  casual_eng:string;
  pants_eng:string;
  jackets_eng:string;
  dress_eng:string;
  hat_eng:string;
  
  culture_eng:string;
  hobbies_eng:string;
  what_not_eng:string;
  when_it_eng:string;
  gift_profile:any;
  set_gift:any;
  updates:any;


  data_post: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { shoes:'', casual:'',pants:'', jackets:'',dress:'',
  hat:'',rand_1:'',rand_2:'',rand_3:'',rand_4:'',culture:'',
  hobbies:'',what_not:'',when_it:''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {
    this.ids = navParams.get('id');
    
    
  }

  ionViewDidLoad() {
    this.loadDB();
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
        this.set_gift = data['set_gift'];
        this.updates = data['updates'];
    
      })


      this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id="+this.user_id_2;
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
      this.loginData.shoes = data['shoes'];
      this.loginData.casual = data['casual'];
      this.loginData.pants = data['pants'];
      
      this.loginData.jackets = data['jackets'];
      this.loginData.dress = data['dress'];
      this.loginData.hat = data['hat'];
      this.loginData.rand_1 = data['rand_1'];
      this.loginData.rand_2 = data['rand_2'];
      this.loginData.rand_3 = data['rand_3'];
      this.loginData.rand_4 = data['rand_4'];
      this.loginData.culture = data['culture'];
      this.loginData.hobbies = data['hobbies'];
      this.loginData.what_not = data['what_not'];
      this.loginData.when_it = data['when_it'];
      this.loading.dismiss();
    })

   // this.loading.dismiss();
  }


  save(){
 
    this.presentLoadingDefault();

        var url_2 = "http://api.givet.co.uk/api/edit_gift_profile.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('shoes',this.loginData.shoes);
        postData.append('casual',this.loginData.casual);
        postData.append('jackets',this.loginData.jackets);
        postData.append('dress',this.loginData.dress);
        postData.append('hat',this.loginData.hat);
        postData.append('rand_1',this.loginData.rand_1);
        postData.append('rand_2',this.loginData.rand_2);
        postData.append('rand_3',this.loginData.rand_3);
        postData.append('rand_4',this.loginData.rand_4);
        postData.append('culture',this.loginData.culture);
        postData.append('hobbies',this.loginData.hobbies);
        postData.append('what_not',this.loginData.what_not);
        postData.append('when_it',this.loginData.when_it);
        this.data_post = this.http.post(url_2,postData);
    
        this.data_post.subscribe(data_post =>{
          if(data_post['user']['status']=="200 OK"){
            this.loading.dismiss();
            this.navCtrl.pop();
            
          }else{
       
            this.loading.dismiss();
            this.presentError();
          }
      
      console.log(data_post);
      
        });

        this.loading.dismiss();
 
}


presentError() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Error establishing connection to server',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Not all fields are filled.',
    buttons: ['Ok']
  });
  alert.present();
}

}
