import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { FavoriteUpdatePage } from '../favorite-update/favorite-update';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { ProductsViewPage } from '../products-view/products-view';
import { ProductsCreatePage } from '../products-create/products-create';
import { SelectProductPage } from '../select-product/select-product';
import { MyListsPage } from '../my-lists/my-lists';
import { UserFavlistPage } from '../user-favlist/user-favlist';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the FavoriteViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite-view',
  templateUrl: 'favorite-view.html',
})
export class FavoriteViewPage {

  
  ids:string;
  lang:any;
  data:Observable<any>;
  data_user:Observable<any>;
  data_like:Observable<any>;
  items:any;
  loginData = { title:'' };

  items_dota:any=[];
  url:string;
  data2:Observable<any>;
  dev = [];
  devs = {};
  test:string;
  url2:string;
  user_id_2:string;
  fp_id:string;

  url_user:string;

  user_id:string;
  name:string;
  type:string;
  rating:string;
  title:string;
  price:string;
  quatnit:string;
  where_buy:string;
  info:string;
  image:string;

  status:string;
  url_like:string;
  url228:string;
  data_products: Observable<any>;

  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  loading:any;
  data_post: Observable<any>;
  result:any=[];
  delete_lang :any;
  ides:any;
  res_user:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

      
    this.ids = navParams.get('id');
    this.res_user = navParams.get('res');
    this.ides = navParams.get('ides');

    
  }

  ionViewDidEnter() {
    
    this.loadDB();
}
  
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  del(item){

    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/delete_prod_from_fav.php";
let postData = new FormData();
postData.append('fav_id',this.ids);
postData.append('prod_id',item.id);
this.data = this.http.post(url,postData);

this.data.subscribe(data =>{


this.loading.dismiss();
this.loadDB();



});

  }


  backTo(){

    if( this.res_user==1){
      this.navCtrl.setRoot(UserFavlistPage,{
        id:this.ides
       });
    }else{
      this.navCtrl.setRoot(MyListsPage);
    }
    
    
  }
  
openModalFriend(){


  let alert = this.alertCtrl.create({
    title: 'Selection',
    message: 'Choose an option?',
    buttons: [
      {
        text: 'Choose from created',
        role: 'cancel',
        handler: () => {
          this.navCtrl.push(SelectProductPage,{
            status:2,
            fav_id:this.ids
          });
        }
      },
      {
        text: 'Create new',
        role: 'cancel',
        handler: () => {
          this.navCtrl.push(ProductsCreatePage,{
            status:2,
            fav_id:this.ids
          });
        }
      }
      ,
      {
        text: 'Cancel',
        role: 'cancel',
       
      }
    ]
  });
  alert.present();


}

  moToView(item){
    this.navCtrl.push(ProductsViewPage,{
      id:item['id']
    });
  }
  
  loadDB(){

    this.presentLoadingDefault();
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
        this.lang = data['product'];
        this.delete_lang = data['del'];
    
      })


      this.url = "http://api.givet.co.uk/api/info_fav.php?fav_id="+this.ids;
    this.getData();

    })
  }

  getData(){
    
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

      this.user_id = data['user_id'];
      this.name = data['name'];
      this.loginData.title = data['name'];
      this.type = data['type'];
    

      this.info = data['info'];
     
      

      this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id="+this.user_id;


      this.data_user = this.http.get(this.url_user);
    this.data_user.subscribe(data_user => {

      this.user_name = data_user['name'];
      this.user_email = data_user['email'];
      this.user_surename = data_user['surename'];
      this.user_image = data_user['image'];


      var person = "http";
      
      
      var personRegExp = new RegExp(person);
      if (personRegExp.test(this.user_image)) {
          console.log(person + " is a philosopher.");
          this.test = '1';
      } else {
        
          console.log(person + " is NOT a philosopher.");
      }

      this.url_like = " http://api.givet.co.uk/api/get_fav_like.php?user_id="+this.user_id_2+"&fav_id="+this.ids;

      

      this.data_like = this.http.get(this.url_like);
    this.data_like.subscribe(data_like => {

      this.status = data_like['status'];



      this.url228 = "http://api.givet.co.uk/api/get_products_from_fav.php?fav_id="+this.ids;

      this.data_products = this.http.get(this.url228);
      this.data_products.subscribe(data_new => {
        this.items_dota = data_new;

       


        this.loading.dismiss();
      })


      //this.loading.dismiss();
    })

    })
      
    })

//    this.loading.dismiss();
  }



  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to delete product from list ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.presentLoadingDefault();

            var url = "http://api.givet.co.uk/api/delete_fav.php";
    let postData = new FormData();
    postData.append('fav_id',id);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['favorite']['status']=="OK"){
        this.loading.dismiss();
        this.navCtrl.setRoot(MyListsPage,{reset:1});
        
      }else{
        this.loading.dismiss();
        this.navCtrl.setRoot(MyListsPage,{reset:1});
      }
  console.log(data);
    });
            


          }
        }
      ]
    });
    alert.present();
  }


  dislike(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/set_like_fav.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('prod_id',this.ids);
        postData.append('like','0');

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['user']['status']=="200 OK"){
            this.loading.dismiss();
           
            this.loadDB();
            
          }else{
       
            this.loading.dismiss();
            this.presentError();
          }
      console.log(data);
        });

        this.loading.dismiss();

  }

  like(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/set_like_fav.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('prod_id',this.ids);
        postData.append('like','1');

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['user']['status']=="200 OK"){
            this.loading.dismiss();
          
            this.loadDB();
            
          }else{
          
       
            this.loading.dismiss();
            this.presentError();
          }
      console.log(data);
        });

        this.loading.dismiss();

  }

  moToCreate(id){
    this.navCtrl.push(FavoriteUpdatePage,{
      id:id
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

  

  openModal(user_id) {

    this.navCtrl.push(UserProfilePage,{
      ides:user_id
    });
  }

}
