import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { WishListPage } from '../wish-list/wish-list';
//import { EventsPage } from '../events/events';
import { EventsViewPage } from '../events-view/events-view';
/**
 * Generated class for the WishlistCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist-create',
  templateUrl: 'wishlist-create.html',
})
export class WishlistCreatePage {

  lang:any;
  data: Observable<any>;
  result:any=[];
  loading:any;
  base64Image:any;
  dev = [];
  devs = {};
  status:any;
  other_id:any;
  url:string;
  user_id_2:string;
  fp_id:string;
  picture_new:any;
  loginData = { title:'', desc:'',type:'',private:'' };

  create_wish:any;
  image_lang:any;
  update_image_lang:any;
  title_lang:any;
  type_lang:any;
  private_lang:any;
  desc_lang:any;
  create_new:any;
  new_id:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
    public http: HttpClient,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,
    private camera: Camera) {


      this.status  = navParams.get('status');

      if(this.status==1){

       this.other_id = navParams.get('event_id');

      }else{
        this.other_id = null;
      }



   this.loadDB();
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


   

  }, (err) => {
   // Handle error
  });

}



openCamera(){

  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
   
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;


   alert(this.base64Image);
    
  
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
        this.create_new = data['create_new'];
    
      })

    })
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

    this.url = "http://api.givet.co.uk/api/create_wishlist.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('title',this.loginData.title);
        postData.append('description',this.loginData.desc);
        postData.append('private',this.loginData.private);
        postData.append('type',this.loginData.type);
        this.data = this.http.post(this.url,postData);
    
        this.data.subscribe(data =>{

            if(data['max(id)']!=null){

              this.new_id = data['max(id)'];

              if(this.status==1){

                this.url = "http://api.givet.co.uk/api/add_wish_to_event.php";
                let postData = new FormData();
                postData.append('event_id',this.other_id);
                postData.append('wish_id',this.new_id );
           
                this.data = this.http.post(this.url,postData);
            
                this.data.subscribe(data =>{
            
                  this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                  let postData = new FormData();
                  postData.append('img',this.picture_new);
                  postData.append('user_id',this.new_id);
                  postData.append('image_name','wish_image.jpg');
                  postData.append('type','wish');
                  this.data = this.http.post(this.url,postData);
              
                  this.data.subscribe(data =>{
              
                    this.loading.dismiss();
              
                  });
              
              
              
              
              
              
                  this.navCtrl.pop();
                //  this.navCtrl.setRoot(EventsViewPage,{id:this.other_id});
              


                });
            
            
            
            
            
            
                //this.navCtrl.pop();
              //  this.navCtrl.setRoot(WishListPage,{reset:1});
            

              }else{

                this.url = "http://api.givet.co.uk/api/set_profile_image.php";
                let postData = new FormData();
                postData.append('img',this.picture_new);
                postData.append('user_id',data['max(id)']);
                postData.append('image_name','wish_image.jpg');
                postData.append('type','wish');
                this.data = this.http.post(this.url,postData);
            
                this.data.subscribe(data =>{
            
                  this.loading.dismiss();
            
                });
            
            

            
                this.navCtrl.pop();
                //this.navCtrl.setRoot(WishListPage,{reset:1});
            

              }


  
            
          }else{
              this.loading.dismiss();
            this.presentError();

            }

          console.log(this.loginData);
          console.log(data);

        });


  }

   
  
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


presentImg(b) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: b,
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
