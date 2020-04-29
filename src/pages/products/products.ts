import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductsCreatePage } from '../products-create/products-create';
import { Observable } from 'rxjs';
import { ProductsViewPage } from '../products-view/products-view';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {


  data:Observable<any>;
  items:any;
  url:string;
  loading:any;
  reset:any;
  dev = [];
  devs = {};
  public searchBar = false;
  queryText:string;
  user_id_2:string;
  fp_id:string;
  lang:any;
  prod_lang:any;
  create_new:any;

  ides:any;


  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,  private databaseProvider:DatabaseProvider) {

    this.reset = navParams.get('reset');
    this.ides = navParams.get('id');


  
  }

  ionViewDidEnter() {
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
    this.url = "http://api.givet.co.uk/api/search_prod.php?fav_title="+this.queryText+"&user_id="+this.ides;
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

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
      

        this.prod_lang = data['product'];
        this.create_new = data['create_new'];
    
      })

      if(this.ides!=null){
        this.url = "http://api.givet.co.uk/api/get_products.php?user_id="+this.ides;
        this.getData();
      }else if(this.ides==null){
 this.url = "http://api.givet.co.uk/api/get_products.php?user_id="+this.user_id_2;
    this.getData();
      }
     

    })
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

      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
      
    })

    this.loading.dismiss();
  }


  moToView(item){
    this.navCtrl.push(ProductsViewPage,{
      id:item['id']
    });
  }

  moToCreate(){
    this.navCtrl.push(ProductsCreatePage,{
      user_id_test:this.ides
    });
  }

}
