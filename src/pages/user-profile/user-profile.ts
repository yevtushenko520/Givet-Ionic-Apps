import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, Platform, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClient } from '@angular/common/http';
import { UserGiftprofilePage } from '../user-giftprofile/user-giftprofile';
import { UserFriendsPage } from '../user-friends/user-friends';
import { UserGroupsPage } from '../user-groups/user-groups';
import { UserWishlistPage } from '../user-wishlist/user-wishlist';
import { UserEventsPage } from '../user-events/user-events';
import { UserFavlistPage } from '../user-favlist/user-favlist';
import { SocialFriendsPage } from '../social-friends/social-friends';
import { TabsPage } from '../tabs/tabs';
import { ProductsPage } from '../products/products';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  
  dev = [];
  devs = {};
  
  user_id_2:string;
  fp_id:string;

  character;
  ides:string;
  data:Observable<any>;
  data_friend:Observable<any>;
  data_friend2:Observable<any>;
  items:any;
  url:string;
  url_friend:string;
  url_friend2:string;
  test:string;
  name:string;
  email:string;
  surename:string;
  image:string;
  bithday:string;
  phone:string;
  home_adress:string;
  mail_adress:string;
  value:any;
  status:any;
  status_friend:any;
  data_soc:Observable<any>;
  url_soc:string;
  url_count:string;
  data_count:Observable<any>;
  events:string;
  wishlist:string;
  fav_list:string;
  groups:string;
  friends:string;
  loading:any;
  data_post: Observable<any>;
  google:string;
  twit:string;
  fb:string;
  inst:string;
  lang:any;
  products:any;
  product_eng:any;
  profile:any;
  phone_eng:any;
  bithday_eng:any;
  home_adress_eng:any;
  mail_adress_eng:any;
  gift_eng:any;
  friends_eng:any;
  groups_eng:any;
  wishlist_eng:any;
  events_lang:any;
  fav_list_eng:any;

  constructor( public navCtrl: NavController,public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController, public http:HttpClient,private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {


      this.ides = params.get('ides');
      this.loadDB();

  }

  
  leav(){
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Would you like to delete this user?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
           this.DelFriend();
          }
        },
      
        {
          text: 'Cancel',
          role: 'cancel',
         
        }
      ]
    });
    alert.present();
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
      
    
        this.profile = data['profile'];
        this.phone_eng = data['number'];
        this.bithday_eng = data['bithday'];
        this.home_adress_eng = data['home'];
        this.mail_adress_eng = data['mail'];
        this.gift_eng = data['gift'];
        this.friends_eng = data['friend'];
        this.groups_eng = data['groups'];
        this.wishlist_eng = data['wishlist'];
        this.events_lang = data['event'];
        this.fav_list_eng = data['fav'];
        this.product_eng = data['product'];

      })
      

      this.url = "http://api.givet.co.uk/api/my_profile.php?user_id="+this.ides;
      this.getData();

    })
  }

  moveToProducts(){
    this.navCtrl.push(ProductsPage,{
      id:this.ides
    });
  }

  
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  getData(){
  
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

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
      

      var person = "http";
      
      
       var personRegExp = new RegExp(person);
       if (personRegExp.test(this.image)) {
           console.log(person + " is a philosopher.");
           this.test = '1';
       } else {
         
           console.log(person + " is NOT a philosopher.");
       }
      
      this.url_friend = "http://api.givet.co.uk/api/check_friend.php?user_id_1="+this.user_id_2+"&user_id_2="+this.ides;


      this.data_friend = this.http.get(this.url_friend);
      this.data_friend.subscribe(data_friend => {
           

           if(data_friend['status']!="400 OK"){
            this.status = data_friend['status'];
          }else if(data_friend['status']=="400 OK"){
            this.status = null;
          }

           this.url_friend2 = "http://api.givet.co.uk/api/check_friend.php?user_id_1="+this.ides+"&user_id_2="+this.user_id_2;


           this.data_friend2 = this.http.get(this.url_friend2);
      this.data_friend2.subscribe(data_friend2 => {

        if(data_friend2['status']!="400 OK"){
          this.status_friend = data_friend2['status'];
        }else if(data_friend2['status']=="400 OK"){
          this.status_friend = null;
        }
       


        this.url_count = "http://api.givet.co.uk/api/count_user.php?user_id="+this.ides;


    this.data_count = this.http.get(this.url_count);
    this.data_count.subscribe(data_count => {
    
      this.events = data_count['events'];
      this.wishlist = data_count['wishlist'];
      this.fav_list = data_count['fav_list'];
      this.groups = data_count['groups'];
      this.friends = data_count['friends'];
      this.products = data_count['products'];

      
      this.url_soc = "http://api.givet.co.uk/api/get_social.php?user_id="+this.ides;

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

        
       }

    })


    })


      })
      })
    })

    this.loading.dismiss();
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }
  moveToGiftProfile(id){
  	this.navCtrl.push(UserGiftprofilePage, {
      id:this.ides
    });
  }

  moveToFriendsPage(id){
    this.navCtrl.push(UserFriendsPage,{
     id:this.ides
    });
  }

  moveToGroupPage(id){
    this.navCtrl.push(UserGroupsPage,{
      id:this.ides
     });
  }


  moveToWishList(id){
    this.navCtrl.push(UserWishlistPage,{
      id:this.ides
     });
  }


  moveToEvents(id){
    this.navCtrl.push(UserEventsPage,{
      id:this.ides
     });
  }

  moveToFav(id){

    this.navCtrl.push(UserFavlistPage,{
      id:this.ides
     });

  }

  moveToSocialFriends(){
    this.navCtrl.push(SocialFriendsPage);
  }


  

  AddNew(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','1');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.loadDB();
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });

    this.loading.dismiss();
  }

  NotWait(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','2');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){

        this.loading.dismiss();
        this.loadDB();
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });

    this.loading.dismiss();

  }
  

  AllAccess(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','3');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){

        this.loading.dismiss();
        this.loadDB();
        
      }else{
   

        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
    this.loading.dismiss();
  }

  DelFriend(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','4');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.loadDB();
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
    this.loading.dismiss();
  }


  Unsibr(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','5');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.loadDB();
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
    this.loading.dismiss();
  }


  DontAdd(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','6');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.loadDB();
        
      }else{
   
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
    this.loading.dismiss();
  }

  AddOldFriend(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_1',this.user_id_2);
    postData.append('user_id_2',this.ides);
    postData.append('add','7');
    
    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.loadDB();
        
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
    
  


}
