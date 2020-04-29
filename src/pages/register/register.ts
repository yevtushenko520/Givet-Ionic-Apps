import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, Platform, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';



import firebase from 'firebase';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

	regData = { name: '', mail: '', pass: '', cnfpass: '',date: '',fn:'', ln:'' };
	authForm : FormGroup;
	username: AbstractControl;
	email: AbstractControl;
	password: AbstractControl;
  cnfpass: AbstractControl;
  first_nameCrt: AbstractControl;
  last_nameCrt: AbstractControl;
  dateCrt: AbstractControl;
  passwordtype:string='password';
  cnfpasswordtype:string='password';
  cnfpasseye:string='eye';
  passeye:string ='eye';
  loading:any;
  data: Observable<any>;    
  result:any=[];

  dev = [];
devs = {};

user_id:string;
fp_id:string;
  
constructor(public platform: Platform,   public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private databaseProvider:DatabaseProvider){
  	this.authForm = this.fb.group({
          'username' : [null, Validators.compose([Validators.required])],
          'email': [null, Validators.compose([Validators.required])],
          'password': [null, Validators.compose([Validators.required])],
          'cnfpass': [null, Validators.compose([Validators.required])],
          'first_nameCrt': [null, Validators.compose([Validators.required])],
          'last_nameCrt': [null, Validators.compose([Validators.required])],
          'dateCrt': [null, Validators.compose([Validators.required])],
      });

        this.username = this.authForm.controls['username'];
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        this.cnfpass = this.authForm.controls['cnfpass'];
        this.first_nameCrt = this.authForm.controls['first_nameCrt'];
        this.last_nameCrt = this.authForm.controls['last_nameCrt'];
        this.dateCrt = this.authForm.controls['dateCrt'];
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

    
    })
  }

  addUserSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw){
    this.databaseProvider.deleteDrop();
    this.databaseProvider.addDeveloperSoc(fp_id, user_id,auth_token_tw,oauth_token_secret_tw,user_id_soc_tw).then(data =>{
      this.loadDB();
    })
    this.devs =  {};
  }



  addUser(fp_id, user_id){
    this.databaseProvider.deleteDrop();
    this.databaseProvider.addDeveloper(fp_id, user_id).then(data =>{
      this.loadDB();
    })
    this.devs =  {};
  }


 
 

  socialLoginFB(){

    let provide = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provide).then(()=>{
    firebase.auth().getRedirectResult().then((result)=>{
    //alert(JSON.stringify(result['user']['email']));   //email
    //alert(JSON.stringify(result['additionalUserInfo']['profile']['name'])); //name
    //alert(JSON.stringify(result['user]['photoURL])); //image


    
  var url = "http://api.givet.co.uk/api/register_social.php";
  let postData = new FormData();
  postData.append('username',result['user']['email']);
  postData.append('type','0');
  postData.append('first_name',result['user']['displayName']);
  postData.append('img',result['user']['photoURL']);
  this.data = this.http.post(url,postData);

  this.data.subscribe(data =>{

 
    //alert(JSON.stringify(data));
    this.addUser(data['fp_id'],data['user_id']);
  });

   // alert(JSON.stringify(result));
    }).catch(function(error){
    alert(JSON.stringify(error));
    });
    })

    }

socialLoginGoogle(){

let provide = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provide).then(()=>{
  firebase.auth().getRedirectResult().then((result)=>{
  //  alert(JSON.stringify(result['user']['email'])); //email
  //alert(JSON.stringify(result['user']['displayName'])); // name
  //alert(JSON.stringify(result['user]['photoURL])); //image


  var url = "http://api.givet.co.uk/api/register_social.php";
      let postData = new FormData();
      postData.append('username',result['user']['email']);
      postData.append('type','1');
      postData.append('first_name',result['user']['displayName']);
      postData.append('img',result['user']['photoURL']);
      this.data = this.http.post(url,postData);

      this.data.subscribe(data =>{

     
       // alert(JSON.stringify(data));
       this.addUser(data['fp_id'],data['user_id']);
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
   // alert(JSON.stringify(result['additionalUserInfo']['username'])); //username
    //alert(JSON.stringify(result['user']['displayName'])); // name
    //alert(JSON.stringify(result['user]['photoURL])); //image

    
  var url = "http://api.givet.co.uk/api/register_social.php";
  let postData = new FormData();
  postData.append('username',result['additionalUserInfo']['username']);
  postData.append('type','2');
  postData.append('first_name',result['user']['displayName']);
  postData.append('img',result['user']['photoURL']);
  this.data = this.http.post(url,postData);

  this.data.subscribe(data =>{

 
    //alert(JSON.stringify(data));
    this.addUserSoc(data['fp_id'],data['user_id'],result['credential']['accessToken'],result['credential']['secret'],result['credential']['secret']);
  });

  }).catch(function(error){
    alert(JSON.stringify(error));
  });
})

}
  


  moveToLogin(){
  	this.navCtrl.setRoot(LoginPage);
  }

  

  postReg(){

    this.presentLoadingDefault();

    if(this.regData.mail.length <= 0 || this.regData.pass.length <= 0 || this.regData.fn.length <= 0 || this.regData.ln.length <= 0
      ||this.regData.date.length <= 0){

      this.loading.dismiss();
      this.presentError();

    }else{
    var url = "http://api.givet.co.uk/api/register.php";
    let postData = new FormData();
    postData.append('email',this.regData.mail);
    postData.append('password',this.regData.pass);
    postData.append('first_name',this.regData.fn);
    postData.append('last_name',this.regData.ln);
    postData.append('date',this.regData.date);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{

     if(data['user']['status']=="400 OK"){

      this.loading.dismiss();
      
        
      }else {


        //alert(JSON.stringify(data));
        
        this.addUser(data['user']['fp_id'],data['user']['user_id']);
      
        this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);

        
      }

  
    });

   
    


  }
  }


  presentError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'This user is already registered.',
      buttons: ['Ok']
    });
    alert.present();
  }
 
  managePassword() {
    if(this.passwordtype == 'password'){
      this.passwordtype='text';
      this.passeye='eye-off';
    }else{
      this.passwordtype='password';
      this.passeye = 'eye';
    }
  }
  managecnfPassword() {
    if(this.cnfpasswordtype == 'password'){
      this.cnfpasswordtype='text';
      this.cnfpasseye='eye-off';
    }else{
      this.cnfpasswordtype='password';
      this.cnfpasseye = 'eye';
    }
  }

}
