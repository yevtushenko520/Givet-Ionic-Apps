import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { WishlistUpdatePage } from '../wishlist-update/wishlist-update';
import { ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { ProductsViewPage } from '../products-view/products-view';
import { ProductsCreatePage } from '../products-create/products-create';
import { SelectProductPage } from '../select-product/select-product';
import { WishListPage } from '../wish-list/wish-list';
import { SocialSharing } from '@ionic-native/social-sharing';
import { UserWishlistPage } from '../user-wishlist/user-wishlist';
import { EventsViewPage } from '../events-view/events-view';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the WishlistViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-wishlist-view',
  templateUrl: 'wishlist-view.html',
})
export class WishlistViewPage {

  ids:string;
  test:string;
  data:Observable<any>;
  data_user:Observable<any>;
  data_like:Observable<any>;
  items:any;
  url:string;

  dev = [];
  devs = {};
  
  items_dota:any=[];
  url228:string;
  data_products: Observable<any>;
  user_id_2:string;
  fp_id:string;

  url_user:string;

  url_like:string;

  user_id:string;
  title:string;
  
  description:string;
  image:string;
  private:string;
  type:string;
  data2:Observable<any>;
  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  status:string;
  url2:string;
  loading:any;
  loginData = { title:'' };
  data_post: Observable<any>;
  result:any=[];
  lang:any;
  ides:any;
  res_user:any;

  private_lang:any;
  desc_lang:any;
  product_lang:any;
  delete_lang:any;
  id_wish:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,private socialSharing: SocialSharing) {
    this.ids = navParams.get('id');
    this.res_user = navParams.get('res');
    this.ides = navParams.get('ides');
    this.id_wish = navParams.get('id_wish');

   
  }
  

  ionViewDidEnter() {
    
    this.loadDB();
}

  backTo(){


    if( this.res_user==1){
      this.navCtrl.setRoot(UserWishlistPage,{
        id:this.ides
       });
    }else if(this.res_user==2){
      this.navCtrl.setRoot(EventsViewPage,{
        id:this.id_wish
       });
    }
    else{
      this.navCtrl.setRoot(WishListPage);
    }
    
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
       

        this.private_lang = data['private'];
        this.desc_lang = data['description'];
        this.product_lang = data['product'];
        this.delete_lang = data['del'];
    
      })

      this.url = "http://api.givet.co.uk/api/info_wishlist.php?wishlist_id="+this.ids;

    this.getData();

    })
  }

  moToView(item){
    this.navCtrl.push(ProductsViewPage,{
      id:item['id']
    });
  }
  

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }

  dislike(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/set_like_wish.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('prod_id',this.ids);
        postData.append('like','0');

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['user']['status']=="200 OK"){
    
           
           

            this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;

      

            this.data_like = this.http.get(this.url_like);
          this.data_like.subscribe(data_like => {
      
            this.status = data_like['status'];
      
      
          })


          this.loading.dismiss();
            
          }else{
       
            this.loading.dismiss();
            this.presentError();
          }
      console.log(data);
        });

        this.loading.dismiss();

  }

  share(){
    // Check if sharing via email is supported
this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/wishlist_page&select=wishlist&id="+this.ids).then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});
  }

  like(){
    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/set_like_wish.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('prod_id',this.ids);
        postData.append('like','1');

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
          if(data['user']['status']=="200 OK"){
    
           
          
            this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;

      

      this.data_like = this.http.get(this.url_like);
    this.data_like.subscribe(data_like => {

      this.status = data_like['status'];


    })


    this.loading.dismiss();
            
          }else{
       
            this.loading.dismiss();
            this.presentError();
          }
      console.log(data);
        });

        this.loading.dismiss();

  }


  
presentError() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Error establishing connection to server',
    buttons: ['Ok']
  });
  alert.present();
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
            status:1,
            wish_id:this.ids,
            res:this.res_user
          });
        }
      },
      {
        text: 'Create new',
        role: 'cancel',
        handler: () => {
          this.navCtrl.push(ProductsCreatePage,{
            status:1,
            wish_id:this.ids,
            res:this.res_user
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

  getData(){

    

    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

      this.user_id = data['user_id'];
      this.loginData.title = data['title'];
      this.title = data['title'];
      this.description = data['description'];
      this.image = data['image'];
      this.private = data['private'];
      this.type = data['type'];

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

      this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;

      

      this.data_like = this.http.get(this.url_like);
    this.data_like.subscribe(data_like => {

      this.status = data_like['status'];


    })


    this.url228 = "http://api.givet.co.uk/api/get_products_from_wish.php?wish_id="+this.ids;

    this.data_products = this.http.get(this.url228);
    this.data_products.subscribe(data_new => {


      this.items_dota = data_new;


      
      


      this.loading.dismiss();
    })


  })
      
    })


   // this.loading.dismiss();
  }


  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to delete product from wishlist ?',
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
            var url = "http://api.givet.co.uk/api/delete_wishlist.php";
    let postData = new FormData();
    postData.append('wishlist_id',id);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['wishlist']['status']=="OK"){

        this.loading.dismiss();
        this.navCtrl.setRoot(WishListPage,{reset:1});
        
      }else{
        this.loading.dismiss();
        this.navCtrl.setRoot(WishListPage,{reset:1});
      }
  console.log(data);
    });
            

  

          }
        }
      ]
    });
    alert.present();
  }


  del(item){

  //  this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/delete_prod_from_wish.php";
let postData = new FormData();
postData.append('wish_id',this.ids);
postData.append('prod_id',item.id);
this.data = this.http.post(url,postData);

this.data.subscribe(data =>{

  //this.presentLoadingDefault();

 this.loadDB();


});

  }

  moveToLogin(id){
  	this.navCtrl.push(WishlistUpdatePage,{
      id:id
    });
  }

  
  openModal(id) {

    this.navCtrl.push(UserProfilePage,{
      ides:id
    });
  }

}
