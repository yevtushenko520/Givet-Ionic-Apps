import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { EventsPage } from '../events/events';
/**
 * Generated class for the EventsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-create',
  templateUrl: 'events-create.html',
})
export class EventsCreatePage {



  data: Observable<any>;
  result:any=[];
  loading:any;
  loginData = { name:'', desc:'',date:'', time:'',rap:''};
  dev = [];
  devs = {};
  url:string;
  user_id:string;
  fp_id:string;
  lang:any;


  desc:any;
  date_eng:any;
  time_eng:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

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
        this.date_eng = data['date'];
        this.time_eng = data['time'];
    
      })
     

    })
  }

  save(){
    this.presentLoadingDefault();
    
    if(this.loginData.name.length <= 0 ){

      this.loading.dismiss();
      this.presentAlertName();

    }else if(this.loginData.desc.length <= 0){

      this.loading.dismiss();
      this.presentAlertDesc();


    }else if(this.loginData.date.length <= 0){

      this.loading.dismiss();
      this.presentAlertDate();


    }else if(this.loginData.time.length <= 0){

      this.loading.dismiss();
      this.presentAlertTime();


    }else if(this.loginData.rap.length <= 0){

      this.loading.dismiss();
      this.presentAlertRap();


    }else{

 

        var url = "http://api.givet.co.uk/api/create_event.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id);
        postData.append('name',this.loginData.name);
        postData.append('description',this.loginData.desc);
        postData.append('date',this.loginData.date);
        postData.append('time',this.loginData.time);
        postData.append('repeat',this.loginData.rap);
        this.data = this.http.post(url,postData);
    
        this.data.subscribe(data =>{
          if(data['event']['status']=="200 OK"){
            this.loading.dismiss();
            this.navCtrl.setRoot(EventsPage,{reset:1});
            
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

presentAlertDate() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Date.',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlertTime() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Time.',
    buttons: ['Ok']
  });
  alert.present();
}

presentAlertRap() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Please complete the Repeat.',
    buttons: ['Ok']
  });
  alert.present();
}


presentTest() {
  let alert = this.alertCtrl.create({
    title: 'Test',
    subTitle: "user_id: "+this.user_id+ " name: "+this.loginData.name+" desc: "+this.loginData.desc+" date: "+this.loginData.date+
    " time: "+this.loginData.time+" rep: "+this.loginData.rap,
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
