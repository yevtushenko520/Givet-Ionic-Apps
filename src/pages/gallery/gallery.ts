import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { GalleryViewPage } from '../gallery-view/gallery-view';
import { Observable } from 'rxjs/Observable';
import { PhotoViewer } from '@ionic-native/photo-viewer';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  data:Observable<any>;
  items:any;
  url:string;
  loading:any;
  dev = [];
  devs = {};
  reset:any;
  user_id:string;
  fp_id:string;
  public searchBar = false;
  queryText:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private photoViewer: PhotoViewer) {

      this.presentLoadingDefault();
      
    this.url = "http://api.givet.co.uk/api/gallery.php";
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
      this.items = data;
      this.loading.dismiss();
    })

    this.loading.dismiss();
  }

  moToView(item){
   
    if(item['image']!=null){
      this.photoViewer.show("https://givet.co.uk/backend/web/images/users/"+item['image']);
    }else{
      this.photoViewer.show("https://givet.co.uk/backend/web/images/default-250x250.png");
    }
     

  }


 
}
