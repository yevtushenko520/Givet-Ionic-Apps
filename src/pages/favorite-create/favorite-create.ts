import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

import { MyListsPage } from '../my-lists/my-lists';
/**
 * Generated class for the FavoriteCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite-create',
  templateUrl: 'favorite-create.html',
})
export class FavoriteCreatePage {

  data: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { name:'', info:''};
  dev = [];
  devs = {};
  base64Image:any;
  
  lang:any;
  user_id:string;
  fp_id:string;

  picture_new:any;
  url:string;
  desc:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController,
    public events: Events,private databaseProvider:DatabaseProvider) {

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
        this.lang = data['name'];
        this.desc = data['description'];
      })


    })
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  save(){
    this.presentLoadingDefault();

    if(this.loginData.name.length <= 0 ){

      this.loading.dismiss();
      this.presentAlertName();

    }else if(this.loginData.info.length <= 0){

      this.loading.dismiss();
      this.presentAlertDesc();


    } else{

        var url = "http://api.givet.co.uk/api/create_fav.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id);
        postData.append('name',this.loginData.name);
       
        postData.append('type','1');
   
        postData.append('info',this.loginData.info);
        this.data = this.http.post(url,postData);
    
        this.data.subscribe(data =>{
          if(data['max(id)']!=null){

            this.loading.dismiss();
    this.navCtrl.setRoot(MyListsPage,{reset:1});
            
          }else{
       
            this.loading.dismiss();
            this.presentError();
          }
      console.log(data);
        });

      }
      this.loading.dismiss();
}


presentAlertName() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Name.',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlertDesc() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Description.',
    buttons: ['Ok']
  });
  alert.present();
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
