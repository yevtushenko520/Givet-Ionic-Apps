import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  forgetData:any= {email : ''}
  authForm : FormGroup;
  email: string;
  public fireAuth: any;
  loading:any;
  data: Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public toast : ToastController
    ,public loadingCtrl: LoadingController,public http: HttpClient,private alertCtrl: AlertController) {
    this.authForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required])],
    });
    //this.email = this.authForm.controls['email'];

  

  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }
  forgetPassword(){

    this.presentLoadingDefault();


    if(this.forgetData.email.length <= 0){

      this.loading.dismiss();
      this.presentErrorTwo();
  

  }else{
    

    var url = "http://api.givet.co.uk/api/forget.php";
    let postData = new FormData();
    postData.append('email',this.forgetData.email);
  
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
     if(data['user']['status']=="200 OK"){
      this.loading.dismiss();
      this. presentInfo();
        this.moveToLogin();
        
      }else{
        this.loading.dismiss();
        this.presentError();
      }
  console.log(data);
    });
  }

  }
 
  moveToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  presentError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'This user not register.',
      buttons: ['Ok']
    });
    alert.present();
  }


  presentErrorTwo() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Field is empty.',
      buttons: ['Ok']
    });
    alert.present();
  }


  presentInfo() {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: 'Your new password , send on you email',
      buttons: ['Ok']
    });
    alert.present();
  }
}
