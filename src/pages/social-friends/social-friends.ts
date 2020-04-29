import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import firebase from 'firebase';
/**
 * Generated class for the SocialFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-friends',
  templateUrl: 'social-friends.html',
})


export class SocialFriendsPage {

  @ViewChild('slides') slides: Slides;

  data:Observable<any>;
  data2:Observable<any>;
  items:any;
  items2:any;
  url:string;
  loading:any;
  fb_soc:any;
  soc_friend:any;


  devs = [];
dev = {};


user_id_2:string;
fp_id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

   
    
  }


  ionViewDidEnter() {
    
    this.url = "http://jsonplaceholder.typicode.com/posts";
    this.loadDB();
}


  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }




  
  loadDB(){
     this.presentLoadingDefault();
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

//      alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];

      var url2 = "http://api.givet.co.uk/api/get_twitter_friends.php";
    //this.presentLoadingDefault();
    let postData = new FormData();
    postData.append('user_id',this.user_id_2);
  

    this.data2 = this.http.post(url2,postData);
    this.data2.subscribe(data2 => {
      this.items2 = data2['users'];
      this.loading.dismiss();
     // alert(JSON.stringify(data2['users']));
     this.getData();
    });

    this.loading.dismiss();
    
    })
  }


  
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }



  getData(){
   
    var url2 = "http://api.givet.co.uk/api/get_twitter_friends.php";
  
    let postData = new FormData();
    postData.append('user_id',this.user_id_2);
  

    this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
      
      this.soc_friend = data['social'];
   
  
    });
  }

  addUser(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw){
        
    this.databaseProvider.addDeveloperSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw).then(data =>{
      this.loadDB();
    })
    this.dev =  {};
  }


  del(){
    this.databaseProvider.deleteDrop().then(data=>{
      this.socialLoginTwitter();
    });
  }



  socialLoginTwitter(){

    let provide = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithRedirect(provide).then(()=>{
    firebase.auth().getRedirectResult().then((result)=>{
     
         // alert(JSON.stringify(result['credential']['secret']));
        //  this.addUser(this.fp_id,this.user_id_2,result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);

          this.getTw(this.user_id_2,result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);
      

    }).catch(function(error){
      alert(JSON.stringify(error));
    });
  })
  }




  getTw(user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw){
   // alert(JSON.stringify("tyt"));
    var url2 = "http://api.givet.co.uk/api/set_twitter_friends.php";
    //this.presentLoadingDefault();
    let postData = new FormData();
    postData.append('user_id',user_id);
    postData.append('auth_token_tw',auth_token_tw);
    postData.append('oauth_token_secret_tw',oauth_token_secret_tw);
    postData.append('user_id_soc_tw',user_id_soc_tw);
  

    this.data2 = this.http.post(url2,postData);
    this.data2.subscribe(data2 => {
     // this.items2 = data2['users'];
      this.loading.dismiss();
     // alert(JSON.stringify(data2['users']));
     this.getData();
    });

    this.loading.dismiss();
  }




  socialLoginFB(){
    let provide = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provide).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
      

        this.navCtrl.pop(this.navCtrl.getActive().component);
        this.fb_soc = 1;

      }).catch(function(error){
      alert(JSON.stringify(error));
      });
      })
  }

}
