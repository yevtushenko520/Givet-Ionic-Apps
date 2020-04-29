import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WishlistCreatePage } from '../wishlist-create/wishlist-create';
import { WishlistViewPage } from '../wishlist-view/wishlist-view';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the WishListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html',
})
export class WishListPage {

  lang:any;
  loading:any;
  data:Observable<any>;
  data2:Observable<any>;
  items:any;
  items_count:any=[];
  url:string;
  url2:string;
  reset:any;
  dev = [];
  devs = {};
  
  user_id_2:string;
  fp_id:string;
  queryText:string;

  public searchBar = false;

  
  topics: string[];
  initialItems:any;

  fav_eng:any;
  products_eng:any;
  create_new_lang:any;

   
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

      this.reset = navParams.get('reset');

   

   
  }


  
  
  ionViewDidEnter() {
    this.presentLoadingDefault();
    this.loadDB();
}

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.loadDB();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  
  

  updateText(ev){
 
  
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_wishlist.php?wishlist_name="+this.queryText+"&user_id="+this.user_id_2;
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
    this.loadDB();

  }
  

  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

     // alert(JSON.stringify(this.dev));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
       
        this.fav_eng = data['wishlist'];
        this.products_eng = data['product'];
        this.create_new_lang = data['create_new'];
    
      })

      this.url = "http://api.givet.co.uk/api/my_wishlist.php?user_id=0";
    this.getData();

    })
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
   
       
      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
       this.loading.dismiss();
    
    })

    this.loading.dismiss();
  }

  moveToLogin(){
    this.navCtrl.push(WishlistCreatePage);
  }

  moveToWish(items){

    this.navCtrl.push(WishlistViewPage,{
      id:items['id']
      });
  }



 

}
