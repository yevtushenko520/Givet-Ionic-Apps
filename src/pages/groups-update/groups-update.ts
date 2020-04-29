import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GroupsPage } from '../groups/groups';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the GroupsUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups-update',
  templateUrl: 'groups-update.html',
})
export class GroupsUpdatePage {

  ids:string;
  res_image:string;
  data:Observable<any>;
 
  items:any;
  url:string;

  dev = [];
  user_id_2:string;
  fp_id:string;
 
  lang:any;

  picture_new:any;
  name:string;
  description:string;
  image:string;
  type:string;
  items_users:any=[];
  base64Image:any;
  data_post: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { name:'', desc:'',type:'' };
  desc:any;
  upload_image_langs:any;
  
  constructor(private databaseProvider:DatabaseProvider,public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,
    private camera: Camera) {
    this.ids = navParams.get('id');

    this.url = "http://api.givet.co.uk/api/info_group.php?group_id="+this.ids;
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

   this.presentLoadingDefault();
   var url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',imageData);
    postData.append('user_id',this.ids);
    postData.append('image_name','group_image.jpg');
    postData.append('type','group');
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
    postData.append('image_name','group_image.jpg');
    postData.append('type','group');
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

      this.loginData.name = data['name'];
      this.loginData.desc = data['description'];
      this.image = data['image'];
      this.loginData.type = data['type'];

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

    }else if(this.loginData.desc.length <= 0){

      this.loading.dismiss();
      this.presentAlertDesc();


    }else if(this.loginData.type.length <= 0){

      this.loading.dismiss();
      this.presentAlertType();

    }
    else{

        var url = "http://api.givet.co.uk/api/edit_group.php";
        let postData = new FormData();
        postData.append('group_id',this.ids);
        postData.append('name',this.loginData.name);
        postData.append('description',this.loginData.desc);
        postData.append('type',this.loginData.type);
        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['group']['status']=="200 OK"){
            this.loading.dismiss();
            this.navCtrl.setRoot(GroupsPage,{reset:1});
            
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
