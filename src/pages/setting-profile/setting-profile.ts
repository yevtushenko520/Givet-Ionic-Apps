import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MyProfilePage } from '../my-profile/my-profile';


/**
 * Generated class for the SettingProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-profile',
  templateUrl: 'setting-profile.html',
})
export class SettingProfilePage {

  data:Observable<any>;
  items:any;
  url:string;

  dev = [];
  devs = {};
  res_image:string;
  lang:any;
  user_id_2:string;
  fp_id:string;

  name:string;
  email:string;
  surename:string;
  image:string;
  bithday:string;
  phone:string;
  home_adress:string;
  mail_adress:string;
  password:string;
  ids:string;


  test:string;
  picture_new:any;

  base64Image:any;
  data_post: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { name:'', email:'',surename:'', bithday:'',phone:'',
  home_adress:'',mail_adress:'',password:''};



  set_profile:any;
  update_image_eng:any;
  first_name_eng:any;
  last_name_eng:any;
  email_eng:any;
  pass_eng:any;
  number_eng:any;
  bith_eng:any;
  home_eng:any;
  mail_eng:any;
  updates:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,
    private camera: Camera) {
    this.ids = navParams.get('id');
    this.loadDB();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
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
      postData.append('user_id',this.user_id_2);
      postData.append('image_name','user_image.jpg');
      postData.append('type','profile');
      this.data = this.http.post(url,postData);

      this.data.subscribe(data =>{
        this.loading.dismiss();

      });
      

     this.res_image = '1';

    }, (err) => {
     // Handle error
    });
    this.loading.dismiss();
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
      postData.append('user_id',this.user_id_2);
      postData.append('image_name','user_image.jpg');
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



  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];

      
      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        
        this.set_profile = data['set_profile'];
        this.update_image_eng = data['update_image'];
        this.first_name_eng = data['first_name'];
        this.last_name_eng = data['last_name'];
        this.email_eng = data['email'];
        this.pass_eng = data['password'];
        this.number_eng = data['number'];
        this.bith_eng = data['bithday'];
        this.home_eng = data['home'];
        this.mail_eng = data['mail'];
        this.updates = data['updates'];
    
      })

      this.url = "http://api.givet.co.uk/api/my_profile.php?user_id="+this.user_id_2;
      this.getData();

    })
  }

  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
     
      this.loginData.name = data['name'];
      this.loginData.email = data['email'];
      this.loginData.surename = data['surename'];
      this.image = data['image'];
      this.loginData.bithday = data['bithday'];
      this.loginData.phone = data['phone'];
      this.loginData.password = data['password'];
      this.loginData.home_adress = data['home_adress'];
      this.loginData.mail_adress = data['mail_adress'];


      
      var person = "http";
      
      
          var personRegExp = new RegExp(person);

          if (personRegExp.test(this.image)) {

              console.log(person + " is a philosopher.");
              this.test = '1';

          } else {
            
              console.log(person + " is NOT a philosopher.");
              
          }

         


      this.loading.dismiss();

     

      
    })

    this.loading.dismiss();
  }

  
  save(){

    this.presentLoadingDefault();

   
        
        if(this.loginData.name.length <= 0 ){

      this.loading.dismiss();
      this.presentAlertName();

    }else if(this.loginData.password.length <= 0){

      this.loading.dismiss();
      this.presentAlertPass();


    }else if(this.loginData.surename.length <= 0){

      this.loading.dismiss();
      this.presentAlertSure();


    }else if(this.loginData.bithday.length <= 0){

      this.loading.dismiss();
      this.presentAlertBith();


    }else if(this.loginData.email.length <= 0){

      this.loading.dismiss();
      this.presentAlertEmail();


    }
        
        
        else{

    var url = "http://api.givet.co.uk/api/update_profile.php";
    let postData = new FormData();
    postData.append('id_user',this.ids);
    postData.append('password',this.loginData.password);
    postData.append('first_name',this.loginData.name);
    postData.append('last_name',this.loginData.surename);
    postData.append('date',this.loginData.bithday);
    postData.append('email',this.loginData.email);
    postData.append('user_phone',this.loginData.phone);
    postData.append('user_home',this.loginData.home_adress);
    postData.append('user_mail',this.loginData.mail_adress);
    postData.append('fp_id',this.fp_id);

    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
        this.loading.dismiss();
        this.navCtrl.setRoot(MyProfilePage,{reset:1});
        
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


presentAlertSure() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Surename.',
    buttons: ['Ok']
  });
  alert.present();
}


presentAlertPass() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Password.',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlertEmail() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Email.',
    buttons: ['Ok']
  });
  alert.present();
}


presentAlertBith() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Birthday.',
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
