import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, App } from 'ionic-angular';

import { GiftProfilePage } from '../gift-profile/gift-profile';
import { FriendsPage } from '../friends/friends';
import { SocialFriendsPage } from '../social-friends/social-friends';
import { SettingProfilePage } from '../setting-profile/setting-profile';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
import { LoginPage } from '../login/login';
import { ProductsPage } from '../products/products';
import { ArticlesPage } from '../articles/articles';
import { GlobalProductPage } from '../global-product/global-product';
import { GalleryPage } from '../gallery/gallery';
import { GlobalUserPage } from '../global-user/global-user';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {


  dev = [];
  devs = {};
  reset:any;
  user_id_2:string;
  fp_id:string;


  data:Observable<any>;
  data_count:Observable<any>;
  data_soc:Observable<any>;
  items:any;
  url:string;
  url_count:string;
  url_soc:string;

  name:string;
  email:string;
  surename:string;
  image:string;
  bithday:string;
  phone:string;
  home_adress:string;
  mail_adress:string;
  id:string;


  events:string;
  wishlist:string;
  fav_list:string;
  groups:string;
  friends:string;
  test:string;
  google:string;
  twit:string;
  fb:string;
  inst:string;
  loading:any;
  lang:any;
  data_post: Observable<any>;
  inter:any;


  profile_lang:any;
  name_lang:any;
  email_eng:any;
  phone_eng:any;
  bithday_eng:any;
  home_adress_eng:any;
  mail_adress_eng:any;
  gift_eng:any;
  product_eng:any;
  friends_eng:any;
  friends_soc_eng:any;
  global_page_eng:any;
  arc_eng:any;
  all_prod_eng:any;
  gal_eng:any;
  user_eng:any;
  exit_eng:any;
  lang_test:any;
  lang_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,
    public http:HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,public app: App) {
     
  }

  moveToProducts(){
    this.navCtrl.push(ProductsPage,{
      id:this.user_id_2
    });
  }


  loadDB(){
    this.presentLoadingDefault();
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];
   

      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        this.lang_test = data['languages'];
        this.lang_id = data['lang_id'];

        this.profile_lang = data['profile'];
        this.name_lang = data['name'];
        this.email_eng = data['email'];
        this.phone_eng = data['number'];
        this.bithday_eng = data['bithday'];
        this.home_adress_eng = data['home'];
        this.mail_adress_eng = data['mail'];
        this.gift_eng = data['gift'];
        this.product_eng = data['product'];
        this.friends_eng = data['friend'];
        this.friends_soc_eng = data['social'];
        this.global_page_eng = data['glob_page'];
        this.arc_eng = data['arc'];
        this.all_prod_eng = data['all_prod'];
        this.gal_eng = data['gallery'];
        this.user_eng = data['users'];
        this.exit_eng = data['exits'];




        
      })


      this.url = "http://api.givet.co.uk/api/my_profile.php?user_id="+this.user_id_2;
     this.getData();

    })
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  presentTwit() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'You Twitter Link',
      inputs: [
        {
          name: 'link',
          placeholder: 'Link',
          value:this.twit,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveTW(data.link);
          }
        }
      ]
    });
    alert.present();
  }

  presentInst() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'You Instagram Link',
      inputs: [
        {
          name: 'link',
          placeholder: 'Link',
          value:this.inst,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveInst(data.link);
          }
        }
      ]
    });
    alert.present();
  }

  presentGoogle() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'You Google Link',
      inputs: [
        {
          name: 'link',
          placeholder: 'Link',
          value:this.google,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveGG(data.link);
          }
        }
      ]
    });
    alert.present();
  }

  presentFacebook() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'You Facebook Link',
      inputs: [
        {
          name: 'link',
          placeholder: 'Link',
          value:this.fb,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveFB(data.link);
            //console.log(data.link);
          }
        }
      ]
    });
    alert.present();
  }


  clickOption(id){

    this.inter = id;

  }

  
  getData(){
   
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.id = data['id'];
      this.name = data['name'];
      this.email = data['email'];
      this.surename = data['surename'];
      this.image = data['image'];
      this.bithday = data['bithday'];
    

      
      if( this.bithday.length > 0 ){
        this.bithday = data['bithday'];
      }else{
        this.bithday = "-";
      }

      this.phone = data['phone'];




      if( this.phone.length > 0 ){
        this.phone = data['phone'];
      }else{
        this.phone = "-";
      }

      this.home_adress = data['home_adress'];

      if( this.home_adress.length > 0){
        this.home_adress = data['home_adress'];
      }else{
        this.home_adress = "-";
      }

      this.mail_adress = data['mail_adress'];

      if(this.mail_adress.length > 0){
        this.mail_adress = data['mail_adress'];
      }else{
        this.mail_adress = "-";
      }
      


      this.url_count = "http://api.givet.co.uk/api/count_user.php?user_id="+this.user_id_2;


      var person = "http";
      
      
      var personRegExp = new RegExp(person);
      if (personRegExp.test(this.image)) {
          console.log(person + " is a philosopher.");
          this.test = '1';
      } else {
        
          console.log(person + " is NOT a philosopher.");
      }

      this.data_count = this.http.get(this.url_count);
    this.data_count.subscribe(data_count => {
    
      this.events = data_count['events'];
      this.wishlist = data_count['wishlist'];
      this.fav_list = data_count['fav_list'];
      this.groups = data_count['groups'];
      this.friends = data_count['friends'];

      this.url_soc = "http://api.givet.co.uk/api/get_social.php?user_id="+this.user_id_2;

      this.data_soc = this.http.get(this.url_soc);
      this.data_soc.subscribe(data_soc => {

       for(let item of data_soc){
        if(item['soc_type']=="twit"){
          this.twit = item['link'];
        }else if(item['soc_type']=="google"){
          this.google = item['link'];
        }else if(item['soc_type']=="inst"){
          this.inst = item['link'];
        }else if(item['soc_type']=="fb"){
          this.fb = item['link'];
        }

        console.log(item);
       }

  

     



         this.loading.dismiss();
       
      
     
    })
  })
    })

    this.loading.dismiss();
  }


  optionsFn(){
    this.presentLoadingDefault();

    this.lang = this.inter;

    var url = "http://api.givet.co.uk/api/set_lang.php";
    let postData = new FormData();
    postData.append('user_id',this.id);
    postData.append('lang_id',this.inter);
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      
      

document.location.href = 'index.html';

    });

  }

  exit(){

    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'You want to exit?',
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            
            this.databaseProvider.deleteDrop().then(date =>{
              
             // this.navCtrl.setRoot(LoginPage);

            
            });
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();


  }

  ionViewDidEnter() {
    this.loadDB();
}

  moveToGiftProfile(ids){
    this.navCtrl.push(GiftProfilePage,{
      id:ids
      });
  }

  moveToFriendsPage(ids){
  	this.navCtrl.push(FriendsPage,{
      id:ids
      });
  }

  moveToArct(){
  	this.navCtrl.push(ArticlesPage);
  }

  moveToProd(){
  	this.navCtrl.push(GlobalProductPage);
  }

  moveToGallery(){
  	this.navCtrl.push(GalleryPage);
  }

  moveToUsers(){
  	this.navCtrl.push(GlobalUserPage);
  }

  moveToSocialFriends(){
  	this.navCtrl.push(SocialFriendsPage);
  }

  moveToSet(id){
  	this.navCtrl.push(SettingProfilePage,{
      id:id
    });
  }

  saveFB(link){

    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/insert_social.php";
    let postData = new FormData();
    postData.append('user_id',this.id);
    postData.append('soc_type','fb');
    postData.append('link',link);
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
       // this.presentYes();

       this.navCtrl.setRoot(MyProfilePage);
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });

    this.loading.dismiss();
  }




  saveTW(link){
    this.presentLoadingDefault();

    var url = "http://api.givet.co.uk/api/insert_social.php";
    let postData = new FormData();
    postData.append('user_id',this.id);
    postData.append('soc_type','twit');
    postData.append('link',link);
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
       // this.presentYes();

       this.navCtrl.setRoot(MyProfilePage);
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
    this.loading.dismiss();
  }

  saveGG(link){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/insert_social.php";
    let postData = new FormData();
    postData.append('user_id',this.id);
    postData.append('soc_type','google');
    postData.append('link',link);
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
       // this.presentYes();

       this.navCtrl.setRoot(MyProfilePage);
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });

    this.loading.dismiss();
  }

  saveInst(link){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/insert_social.php";
    let postData = new FormData();
    postData.append('user_id',this.id);
    postData.append('soc_type','inst');
    postData.append('link',link);
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
      //  this.presentYes();

        this.navCtrl.setRoot(MyProfilePage);
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
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
    

    presentYes() {
      let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Your link is add',
      buttons: ['Ok']
      });
      alert.present();

      
      }

      
presentAlert() {
  let alert = this.alertCtrl.create({
  title: 'Error',
  subTitle: 'Link not found.',
  buttons: ['Ok']
  });
  alert.present();
  }

 

}
