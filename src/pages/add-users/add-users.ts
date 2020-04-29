import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the AddUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-users',
  templateUrl: 'add-users.html',
})
export class AddUsersPage {

  data:Observable<any>;
  data2:Observable<any>;
  data_group:Observable<any>;
  url:string;
  url2:string;
  ids:string;
  gg:string;
  items:any=[];
  items_users:any=[];
  url_group:string;
  loading:any;

  public searchBar = false;
  queryText:string;
  dev = [];
devs = {};

user_id:string;
fp_id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    private alertCtrl: AlertController, public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,private toastCtrl: ToastController) {
    this.ids = navParams.get('id');
    this.loadDB();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  updateText(ev){
 
    if(this.queryText.length > 0 ){
      this.url = "http://api.givet.co.uk/api/search_friend.php?user_id="+this.user_id+"&email="+this.queryText;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
  
     if(data['status']!="400 OK"){
      this.items = data;
     }else if(data['status']=="400 OK"){
      this.items = null;
     }

    
    })

  }

  }

  cancelSearch(){

    this.searchBar=false;
    
    this.url = "http://api.givet.co.uk/api/my_user_in_group.php?user_id="+this.user_id+"&group_id="+this.ids;
    this.getData();

  }


  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id = this.dev[0]['user_id'];

      this.url = "http://api.givet.co.uk/api/my_user_in_group.php?user_id="+this.user_id+"&group_id="+this.ids;
      this.getData();

    })
  }

  addUser(item){
//this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/send_user_in_group.php";
    let postData = new FormData();
    postData.append('user_id',item['id']);
    postData.append('group_id',this.ids);
    postData.append('add','0');

    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['user']['status']=="200 OK"){
      //  this.loading.dismiss();
        this.presentToast();
       this.loadDB();
      }else{
   
        this.loading.dismiss();
       // this.presentError();
      }
     // this.loading.dismiss();
    });
  }

  presentError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error establishing connection to server',
      buttons: ['Ok']
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  presentYes() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Friend add to group',
      buttons: ['Ok']
    });
    alert.present();
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
      if(data['status']!="400 OK"){
        this.items = data;
      }else if(data['status']=="400 OK"){
        this.items = null;
      }
    

  this.loading.dismiss();
    })
  }

}
