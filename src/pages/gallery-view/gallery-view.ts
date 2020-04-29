import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the GalleryViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery-view',
  templateUrl: 'gallery-view.html',
})
export class GalleryViewPage {

  ids:string;
  dev = [];
  devs = {};
  
  user_id_2:string;
  fp_id:string;
  data:Observable<any>;
  data_user:Observable<any>;
  items:any;
  url:string;
  data2:Observable<any>;
  items_dota:any=[];
  url2:string;
  url_user:string;
  test:string;
  user_id:string;
  name:string;
  description:string;
  date:string;
  time:string;
  repeat:string;
  loginData = { title:'',image:'',desc:'',date:'' };
  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  url228:string;
  data_products: Observable<any>;
  loading:any;
   image:string;
   desc:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController) {

    this.ids = navParams.get('id');

    this.presentLoadingDefault();

    this.url = "http://api.givet.co.uk/api/info_gallery.php?gallery_id="+this.ids;
    this.getData();
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }




  getData(){
   
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
    //  this.items = data;
  
    this.image = data['image'];
    this.desc = data['desc'];
  
      this.loading.dismiss();
    })

    this.loading.dismiss();
  }
 

 

}
