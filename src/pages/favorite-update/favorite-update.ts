import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

//import { MyListsPage } from '../my-lists/my-lists';
import { FavoriteViewPage } from '../favorite-view/favorite-view';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the FavoriteUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite-update',
  templateUrl: 'favorite-update.html',
})
export class FavoriteUpdatePage {

  
  ids:string;
  dev = [];
  user_id_2:string;
  fp_id:string;
  url:string;
  data:Observable<any>;
  lang:any;

  items:any;


  res_image:string;

  name:string;
  type:string;
 
  title:string;
  price:string;
  quatnit:string;
  where_buy:string;
  info:string;
 
  loading:any;
  data_post: Observable<any>;
  result:any=[];
  base64Image:any;
  loginData = { name:'', info:'' };


 
  desc:any;
  updates:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController, public events: Events,private databaseProvider:DatabaseProvider) {

    
    this.ids = navParams.get('id');

    this.url = "http://api.givet.co.uk/api/info_fav.php?fav_id="+this.ids;
    this.getData();
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
        this.lang = data['name'];
        this.desc = data['description'];
        this.updates = data['updates'];
    
      })

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

      
    
      this.loginData.name = data['name'];

      this.type = data['type'];
    
    
      this.loginData.info = data['info'];
    


      
      this.loading.dismiss();

      this.loadDB();
    })

    this.loading.dismiss();
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
        
        var url = "http://api.givet.co.uk/api/edit_fav.php";
        let postData = new FormData();
        postData.append('fav_id',this.ids);
        postData.append('name',this.loginData.name);
     
        postData.append('type','1');

        postData.append('info',this.loginData.info);
        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['favorite']['status']=="200 OK"){
            this.loading.dismiss();
            this.navCtrl.setRoot(FavoriteViewPage,{id:this.ids});
            
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
