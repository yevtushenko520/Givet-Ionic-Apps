import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { TabsPage } from '../tabs/tabs';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : []
})
export class LoginPage {

	userData:any;
	loginData = { email:'', password:'' };
	authForm : FormGroup;
	email: AbstractControl;
	password: AbstractControl;
  passwordtype:string='password';
  passeye:string ='eye';
  loading:any;
  data: Observable<any>;
  result:any=[];
  expenses: any = [];
totalIncome = 0;
totalExpense = 0;
balance = 0;
tw:string;

devs = [];
dev = {};

  constructor(public toastCtrl: ToastController, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController,private alertCtrl: AlertController ) {
  	this.authForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });

    
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
       
/*
        this.databaseProvider.getDatabaseState().subscribe(rdy=>{
          if(rdy){
            this.presentLoadingDefault();
            this.loadDev();
          }
        })*/
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  /*
  loadDev(){
    
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

      //alert( data);
 
      if(data[0]['fp_id']!=null){

        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);

      }else{
        this.loading.dismiss();
      }
    }).catch(this.loading.dismiss());

    this.loading.dismiss();
  }


  loadDevTW(){
    //this.presentLoadingDefault();
    this.databaseProvider.getUsersTW().then(data=>{
      this.devs = data;
  
      if(data[0]['fp_id']!=null){

        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);

      }else{
        this.loading.dismiss();
      }
    }).catch(this.loading.dismiss());

    this.loading.dismiss();
  }
 
*/
  moveToForget(){
    this.navCtrl.setRoot(ForgetPage);

  }

/*------------------
--------------------*/
  // Move to register page
  moveToRegister(){
  	this.navCtrl.setRoot(RegisterPage);
  }

      //Move to Home Page
      moveToHome(){

        if(this.loginData.email.length > 0 && this.loginData.password.length > 0){
      this.presentLoadingDefault();
      var url = "http://api.givet.co.uk/api/login.php";
      let postData = new FormData();
      postData.append('username',this.loginData.email);
      postData.append('password',this.loginData.password);
      this.data = this.http.post(url,postData);

      this.data.subscribe(data =>{


        this.loading.dismiss();
     
  

      if(data['fp_id']!=null){
        this.loading.dismiss();
      //  this.addUser(data['fp_id'],data['user_id']);

    
        
      }else{

      this.loading.dismiss();
       this.presentUser();
      }
      

      });

    }else{
      this.loading.dismiss();
      this.presentError();

    }
    this.loading.dismiss();

      }

      presentError() {
        let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Field is empty',
        buttons: ['Ok']
        });
        alert.present();
        }
        

        presentUser() {
          let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'This user is not registered',
          buttons: ['Ok']
          });
          alert.present();
          }
          

      presentToast(err) {
      const toast = this.toastCtrl.create({
      message: err.message,
      duration: 3000,
      position: 'bottom'
      });

      toast.present();
      }
      presentAlert(err) {

      }

/*
      del(){
        this.databaseProvider.deleteDrop().then(data=>{
          this.loadDev();
        });
      }


      addUserSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw){
        
        this.databaseProvider.addDeveloperSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw).then(data =>{
          this.loadDevTW();
        })
        this.dev =  {};
      }

      
      addUser(fp_id, user_id){
        
        this.databaseProvider.addDeveloper(fp_id, user_id).then(data =>{
          this.loadDev();
        })
        this.dev =  {};
      }*/

      managePassword() {
      if(this.passwordtype == 'password'){
      this.passwordtype='text';
      this.passeye='eye-off';
      }else{
      this.passwordtype='password';
      this.passeye = 'eye';
      }
      }

      forgetpassword(){

      this.navCtrl.setRoot(ForgetPage);

      }


      socialLoginFB(){

      let provide = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provide).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
      


        var url = "http://api.givet.co.uk/api/login_social.php";
        let postData = new FormData();
        postData.append('username',result['user']['email']);
      
        this.data = this.http.post(url,postData);
      
        this.data.subscribe(data =>{
      
       
         // alert(JSON.stringify(data));
         if(data['user_id']!=null){
        //  this.addUser(data['fp_id'],data['user_id']);
        }else{
          this.presentUser();
        }
        });



      }).catch(function(error){
      alert(JSON.stringify(error));
      });
      })

      }

socialLoginGoogle(){

  let provide = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithRedirect(provide).then(()=>{
    firebase.auth().getRedirectResult().then((result)=>{
      var url = "http://api.givet.co.uk/api/login_social.php";
      let postData = new FormData();
      postData.append('username',result['user']['email']);
    
      this.data = this.http.post(url,postData);
    
      this.data.subscribe(data =>{
    
     
        //alert(JSON.stringify(data));
        if(data['user_id']!=null){
         // this.addUser(data['fp_id'],data['user_id']);
        }else{
          this.presentUser();
        }
        
      });

    }).catch(function(error){
      alert(JSON.stringify(error));
    });
  })

}

socialLoginTwitter(){
  let provide = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithRedirect(provide).then(()=>{
    firebase.auth().getRedirectResult().then((result)=>{
      var url = "http://api.givet.co.uk/api/login_social.php";
        let postData = new FormData();
        postData.append('username',result['additionalUserInfo']['username']);
      
        this.data = this.http.post(url,postData);
      
        this.data.subscribe(data =>{
      
       this.tw = '1';
         // alert(JSON.stringify(result['credential']['secret']));
         if(data['user_id']!=null){
       //   this.addUserSoc(data['fp_id'],data['user_id'],result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);
         }else{
          this.presentUser();
        }
          
        });

    }).catch(function(error){
      alert(JSON.stringify(error));
    });
  })

}

}
