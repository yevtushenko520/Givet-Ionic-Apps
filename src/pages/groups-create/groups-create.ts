import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the GroupsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups-create',
  templateUrl: 'groups-create.html',
})
export class GroupsCreatePage {

  dev = [];
  devs = {};
  lang:any;
  user_id:string;
  fp_id:string;
  base64Image:any;
  
  data: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { name:'', desc:'',type:'' };
  picture_new:any;
  url:string;
  desc:any;
  image_langs:any;
  upload_image_langs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController,
    private camera: Camera,private databaseProvider:DatabaseProvider) {

    this.loadDB();
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
      this.user_id = this.dev[0]['user_id'];

      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        this.lang = data['name'];
        this.desc = data['description'];
        this.image_langs = data['image'];
        this.upload_image_langs = data['update_image'];
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
   /*this.presentLoadingDefault();
   var url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',imageData);
   // postData.append('user_id',this.ids);
    postData.append('image_name','group_image.jpg');
    postData.append('type','group');
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      this.loading.dismiss();

    });*/
    

   //this.res_image = '1';

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
   /*this.presentLoadingDefault();
   var url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',imageData);
    //postData.append('user_id',this.ids);
    postData.append('image_name','group_image.jpg');
    postData.append('type','group');
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      this.loading.dismiss();

    });*/

    
  // this.res_image = '1';
  }, (err) => {
   // Handle error
  });

}



  save(){
  this.presentLoadingDefault();


          
      if(this.loginData.name.length <= 0 ){

        this.loading.dismiss();
        this.presentAlertName();
  
      }else if(this.loginData.desc.length <= 0){
  
        this.loading.dismiss();
        this.presentAlertDesc();
  
  
      }else if(this.loginData.type.length <= 0){
  
        this.loading.dismiss();
        this.presentAlertType();
  
      }
      
      else{
        
        var url = "http://api.givet.co.uk/api/create_group.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id);
        postData.append('name',this.loginData.name);
        postData.append('description',this.loginData.desc);
        postData.append('type',this.loginData.type);
        this.data = this.http.post(url,postData);
    
        this.data.subscribe(data =>{
          if(data['max(id)']!=null){

            this.presentLoadingDefault();
              var url = "http://api.givet.co.uk/api/set_profile_image.php";
               let postData = new FormData();
               postData.append('img',this.picture_new);
               postData.append('user_id',data['max(id)']);
               postData.append('image_name','group_image.jpg');
               postData.append('type','group');
               this.data = this.http.post(url,postData);
           
               this.data.subscribe(data =>{
                 this.loading.dismiss();

                 this.navCtrl.pop();

           
               });  
           
           
               
                       
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
