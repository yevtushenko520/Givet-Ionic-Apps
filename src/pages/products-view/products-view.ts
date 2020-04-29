import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProductsUpdatePage } from '../products-update/products-update';
import { DatabaseProvider } from '../../providers/database/database';
import { ProductsPage } from '../products/products';
import { SocialSharing } from '@ionic-native/social-sharing';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the ProductsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-view',
  templateUrl: 'products-view.html',
})
export class ProductsViewPage {


  ids:string;
  personRegExp:any;
  data:Observable<any>;
  data_user:Observable<any>;
  data_like:Observable<any>;
  items:any;
  url:string;

  dev = [];
  devs = {};
  test:string;
  test_2:string;
  
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
   link:string;
   check_link:any;
  status:string;
  url_like:string;

  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  loading:any;
  data_post: Observable<any>;
  result:any=[];
  loginData = { title:'' };
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,private socialSharing: SocialSharing) {

    this.ids = navParams.get('id');

    this.loadDB();

  }

  moToCreate(id){
    this.navCtrl.push(ProductsUpdatePage,{
      id:id
    });
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  
  loadDB(){
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];

      
      this.url = "http://api.givet.co.uk/api/info_product.php?fav_id="+this.ids;
      this.getData();

    })
  }



  share(){
    // Check if sharing via email is supported
this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/product_page&select=product&id="+this.ids).then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});
  }

  getData(){

    

    
    this.presentLoadingDefault();

   
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

      this.user_id = data['user_id'];
      this.name = data['name'];
      this.loginData.title = data['name'];
      this.info = data['details'];
      this.rating = data['rating'];
      this.title = data['title'];
      this.link = data['link'];
      this.price = data['price'];
      this.quatnit = data['quan'];
      this.where_buy = data['where_buy'];
      this.image= data['image'];

      var person = "http";
      
      
      var personRegExp = new RegExp(person);
      if (personRegExp.test(this.image)) {
          console.log(person + " is a philosopher.");
          this.test_2 = '1';
      } else {
        
          console.log(person + " is NOT a philosopher.");
      }



      var person2 = "amazon";
      
      
      this.personRegExp = new RegExp(person2);
      if (personRegExp.test(this.link)) {
          console.log(person2 + " is a philosopher.");
          this.check_link = '1';
      } else {
        
          console.log(person2 + " is NOT a philosopher.");
      }

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

      
      this.loading.dismiss();
    

    })
      
    })

    this.loading.dismiss();
  }

  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to delete this product?',
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

            var url = "http://api.givet.co.uk/api/delete_product.php";
    let postData = new FormData();
    postData.append('fav_id',id);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['product']['status']=="OK"){
        this.loading.dismiss();
      
            
        this.navCtrl.pop();
       // this.navCtrl.setRoot(ProductsPage,{reset:1});
        
      }else{
        
        this.loading.dismiss();
        this.navCtrl.pop();
       // this.navCtrl.setRoot(ProductsPage,{reset:1});
      }
  console.log(data);

    });
            
    this.loading.dismiss();
      
            
    //this.navCtrl.pop();
  //  this.navCtrl.setRoot(ProductsPage,{reset:1});

          }
        }
      ]
    });
    alert.present();
  }



  openModal(user_id) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:user_id
    });
  }

}
