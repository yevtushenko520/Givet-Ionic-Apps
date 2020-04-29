import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the UserGiftprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-giftprofile',
  templateUrl: 'user-giftprofile.html',
})
export class UserGiftprofilePage {

  data:Observable<any>;
  items:any;
  url:string;
  ids:string;

  shoes:string;
  casual:string;
  pants:string;
  jackets:string;
  dress:string;
  hat:string;
  rand_1:string;
  rand_2:string;
  rand_3:string;
  rand_4:string;
  culture:string;
  hobbies:string;
  what_not:string;
  when_it:string;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,
    public loadingCtrl: LoadingController) {

    this.ids = navParams.get('id');
    this.url = "http://api.givet.co.uk/api/gift_profile.php?user_id="+this.ids;
      this.getData();
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
      this.shoes = data['shoes'];
      this.casual = data['casual'];
      this.pants = data['pants'];
      this.jackets = data['jackets'];
      this.dress = data['dress'];
      this.hat = data['hat'];
      this.rand_1 = data['rand_1'];
      this.rand_2 = data['rand_2'];
      this.rand_3 = data['rand_3'];
      this.rand_4 = data['rand_4'];
      this.culture = data['culture'];
      this.hobbies = data['hobbies'];
      this.what_not = data['what_not'];
      this.when_it = data['when_it'];
      
      this.loading.dismiss();
    })

    this.loading.dismiss();
  }

 

}
