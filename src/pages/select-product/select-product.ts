import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { ProductsCreatePage } from '../products-create/products-create';
import { WishListPage } from '../wish-list/wish-list';
//import { MyListsPage } from '../my-lists/my-lists';
import { WishlistViewPage } from '../wishlist-view/wishlist-view';
import { FavoriteViewPage } from '../favorite-view/favorite-view';
/**
 * Generated class for the SelectProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-product',
  templateUrl: 'select-product.html',
})
export class SelectProductPage {


  res_user:any;
  data:Observable<any>;
  data2:Observable<any>;
  data3:Observable<any>;
  items:any;
  items2:any;
  items3:any;
  url:string;
  loading:any;
  reset:any;
  dev = [];
  devs = {};
  pepperoni:any;

  status:any;

  url2:string;
  url3:string;

  other_id:any;
  items_dota:any=[];
  search:any=[];
  
  user_id_2:string;
  fp_id:string;

  cucumber: boolean;

  select_prod_lang:any;
  create_new_lang:any;
  add_lang:any;

  public searchBar = false;
  queryText:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,  private databaseProvider:DatabaseProvider) {

      this.res_user = navParams.get('res');
      this.status  = navParams.get('status');

      if(this.status==1){

       this.other_id = navParams.get('wish_id');

      }else if(this.status==2){

        
       this.other_id = navParams.get('fav_id');

      }
      
      else{
        this.other_id = null;
      }


      this.loadDB();
  }

  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];

      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {

        
      
          this.select_prod_lang = data['select_prod'];
          this.create_new_lang = data['create_new'];
          this.add_lang = data['adds'];
      })

      if(this.status==1){

 
        this.url = "http://api.givet.co.uk/api/get_prod_wish.php?user_id="+this.user_id_2+"&wish_id="+this.other_id;
    this.getData();

      }else if(this.status==2){
     
        this.url = "http://api.givet.co.uk/api/get_prod_fav.php?user_id="+this.user_id_2+"&wish_id="+this.other_id;
        this.getData();

      }

    })
  }


  updateText(ev){
 
    if(this.queryText.length > 0 ){

      if(this.status==1){

    this.url = "http://api.givet.co.uk/api/search_select_wish_prod.php?fav_title="+this.queryText+"&user_id="+this.user_id_2+"&wish_id="+this.other_id;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
      if(data['status']!="400 OK"){

        
        this.items_dota = data;
      }else if(data['status']=="400 OK"){
        this.items_dota = null;
      }
     
    })


  }else if(this.status==2){

    this.url = "http://api.givet.co.uk/api/search_select_fav_prod.php?fav_title="+this.queryText+"&user_id="+this.user_id_2+"&wish_id="+this.other_id;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
      if(data['status']!="400 OK"){

        
        this.items_dota = data;
      }else if(data['status']=="400 OK"){
        this.items_dota = null;
      }
     
    })

  }



  }

  }

  cancelSearch(){

    this.searchBar=false;
    if(this.status==1){

      this.url = "http://api.givet.co.uk/api/get_prod_wish.php?user_id="+this.user_id_2+"&wish_id="+this.other_id;
  this.getData();

    }else if(this.status==2){

      this.url = "http://api.givet.co.uk/api/get_prod_fav.php?user_id="+this.user_id_2+"&wish_id="+this.other_id;
      this.getData();

    }

  }

  
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  

  updateCucumber(item) {

    this.url = "http://api.givet.co.uk/api/insert_prod_in_cache.php?user_id="+this.user_id_2+"&prod_id="+item['id'];
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;


    });


  }

  save(){
    this.presentLoadingDefault();
    this.url = "http://api.givet.co.uk/api/select_cache.php?user_id="+this.user_id_2;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;


      if(data!=null){


      

        if(this.status==1){

          for(let god of data){

            this.url2 = "http://api.givet.co.uk/api/add_prod_to_wish.php";
            let postData = new FormData();
            postData.append('wish_id',this.other_id);
            postData.append('prod_id',god['prod_id']);
       
            this.data2 = this.http.post(this.url2,postData);
        
            this.data2.subscribe(data =>{
    
        
            });
  
  
          }


          
        this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id="+this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(data => {
          this.items = data;

          this.loading.dismiss();

      this.navCtrl.pop();

      

          
          

        });
  
   
         }else if(this.status==2){
   
           
          for(let god of data){

            this.url2 = "http://api.givet.co.uk/api/add_prod_to_fav.php";
            let postData = new FormData();
            postData.append('fav_id',this.other_id);
            postData.append('prod_id',god['prod_id']);
       
            this.data2 = this.http.post(this.url2,postData);
        
            this.data2.subscribe(data =>{
    
        
            });
  
  
          }

          
        this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id="+this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(data => {
          this.items = data;

          this.loading.dismiss();

          this.navCtrl.pop();
  

        });
  
   
         }


      
      }else{
        this.loading.dismiss();

        this.navCtrl.pop();
      }
    });


  }

  getData(){
  
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
      
  
        this.loading.dismiss();
       
     if(data['status']!="400 OK"){
      this.items_dota = data;
     }else if(data['status']=="400 OK"){
      this.items_dota= null;
     }

    })

  //  this.loading.dismiss();
  }

  
  moToCreate(){
    this.navCtrl.push(ProductsCreatePage);
  }
 

}
