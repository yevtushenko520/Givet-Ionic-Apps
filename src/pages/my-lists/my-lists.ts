import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FavoriteViewPage } from '../favorite-view/favorite-view';
import { FavoriteCreatePage } from '../favorite-create/favorite-create';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the MyListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html',
})
export class MyListsPage {

  data:Observable<any>;
  items:any;
  url:string;
  loading:any;
  reset:any;
  dev = [];
  devs = {};
  url2:string;
  data2:Observable<any>;
  items_count:any=[];
  user_id_2:string;
  fp_id:string;
  queryText:string;
  public searchBar = false;
  lang:any;

  products_lang:any;
  create_new_lang:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

      this.reset = navParams.get('reset');

    


    
  }


  ionViewDidEnter() {

    this.loadDB();
}
  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
      
        this.products_lang = data['product'];
        this.create_new_lang = data['create_new'];
    
      })

      this.url = "http://api.givet.co.uk/api/my_fav_list.php?user_id="+this.user_id_2;
    this.getData();

    })
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  updateText(ev){
 
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_fav.php?fav_name="+this.queryText+"&user_id="+this.user_id_2;
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


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.loadDB();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
    this.loading.dismiss();
  }

  moToView(item){
    this.navCtrl.push(FavoriteViewPage,{
      id:item['id']
    });
  }

  moToCreate(){
    this.navCtrl.push(FavoriteCreatePage);
  }



  

}
