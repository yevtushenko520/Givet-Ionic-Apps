import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductsCreatePage } from '../products-create/products-create';
import { Observable } from 'rxjs';
import { ProductsViewPage } from '../products-view/products-view';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the GlobalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global-product',
  templateUrl: 'global-product.html',
})
export class GlobalProductPage {


  lang:any;
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
  product_lang:any;
  create_new:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,  private databaseProvider:DatabaseProvider) {

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
    this.url = "http://api.givet.co.uk/api/search_all_prod.php?fav_title="+this.queryText;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
  
     

      this.items = data;
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
       
        this.product_lang = data['product'];
        this.create_new = data['create_new'];
    
      })

      this.url = "http://api.givet.co.uk/api/get_all_products.php";
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
  
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;
      this.loading.dismiss();
    })

    this.loading.dismiss();
  }


  moToView(item){
    this.navCtrl.push(ProductsViewPage,{
      id:item['id']
    });
  }

  moToCreate(){
    this.navCtrl.push(ProductsCreatePage);
  }
  

}
