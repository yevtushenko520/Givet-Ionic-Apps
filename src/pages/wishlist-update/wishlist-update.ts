import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { WishListPage } from '../wish-list/wish-list';
import { WishlistViewPage } from '../wishlist-view/wishlist-view';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the WishlistUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist-update',
  templateUrl: 'wishlist-update.html',
})
export class WishlistUpdatePage {

  ids:string;
  
  data:Observable<any>;
  items:any;
  url:string;
  base64Image:any;
  test:string;
  title:string;
  description:string;
  image:string;
  private:string;
  type:string;
  res_image:string;
  data_post2: Observable<any>;
  result:any=[];
  picture_new:any;
  loading:any;
  loginData = { title:'', desc:'',type:'',private:'' };

  dev = [];
  user_id_2:string;
  fp_id:string;
 
  lang:any;

  create_wish:any;
  image_lang:any;
  update_image_lang:any;
  title_lang:any;
  type_lang:any;
  private_lang:any;
  desc_lang:any;
  updates:any;

  constructor(private databaseProvider:DatabaseProvider,public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private camera: Camera) {

    this.ids = navParams.get('id');

    this.url = "http://api.givet.co.uk/api/info_wishlist.php?wishlist_id="+this.ids;
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
       
        this.create_wish = data['create_wish'];
        this.image_lang = data['image'];
        this.update_image_lang = data['update_image'];
        this.title_lang = data['title'];
        this.type_lang = data['type'];
        this.private_lang = data['private'];
        this.desc_lang = data['description'];
        this.updates = data['updates'];
    
      })

    })
  }

  openModal(){
    
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'Choose where to take photos',
      
      buttons: [
        {
          text: 'Camera',
          handler: data => {
            this.openCamera();
          }
        },
        {
          text: 'Gallery',
          handler: data => {
            this.openGalery();
            
          }
        }
      ]
    });
    alert.present();


}


openGalery(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
  
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:false
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;

   this.presentLoadingDefault();
   var url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',imageData);
    postData.append('user_id',this.ids);
    postData.append('image_name','wish_image.jpg');
    postData.append('type','wish');
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      this.loading.dismiss();

    });
    

   this.res_image = '1';

  }, (err) => {
   // Handle error
  });

}



openCamera(){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
   
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;

   this.presentLoadingDefault();
   var url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',imageData);
    postData.append('user_id',this.ids);
    postData.append('image_name','wish_image.jpg');
    postData.append('type','profile');
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      this.loading.dismiss();

    });

    
   this.res_image = '1';
  }, (err) => {
   // Handle error
  });

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

      this.loginData.title = data['title'];
      this.loginData.desc = data['description'];
      this.image = data['image'];
      this.loginData.private = data['private'];
      this.loginData.type = data['type'];

      var person = "http";
      
      var personRegExp = new RegExp(person);
      if (personRegExp.test(this.image)) {
          console.log(person + " is a philosopher.");
          this.test = '1';
      } else {
        
          console.log(person + " is NOT a philosopher.");
      }

      this.loading.dismiss();

      this.loadDB();
    })

    this.loading.dismiss();
  }





  save(){
    this.presentLoadingDefault();
   
    if(this.loginData.title.length <= 0 ){

        this.loading.dismiss();
        this.presentAlertName();

      }else if(this.loginData.desc.length <= 0){

        this.loading.dismiss();
        this.presentAlertDesc();


      }else if(this.loginData.private.length <= 0){

        this.loading.dismiss();
        this.presentAlertPrivate();

        
      }else if(this.loginData.type.length <= 0){

        this.loading.dismiss();
        this.presentAlertType();

      }
      
      
      else{


        var url = "http://api.givet.co.uk/api/edit_wishlist.php";
        let postData = new FormData();
        postData.append('wishlist_id',this.ids);
        postData.append('title',this.loginData.title);
        postData.append('description',this.loginData.desc);
        postData.append('private',this.loginData.private);
        postData.append('type',this.loginData.type);
        this.data_post2 = this.http.post(url,postData);
    
        this.data_post2.subscribe(data =>{
          if(data['wishlist']['status']=="200 OK"){
            
            this.loading.dismiss();
            //this.navCtrl.setRoot(WishListPage,{reset:1});
           // this.navCtrl.setRoot(WishlistViewPage,{id:this.ids});
            this.navCtrl.pop();
            
          }else{
       

            this.presentError();
          }
      console.log(data);
        });


      }
    
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

presentAlertName() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Title.',
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

presentAlertPrivate() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Private.',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlertType() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Type.',
    buttons: ['Ok']
  });
  alert.present();
}



}
