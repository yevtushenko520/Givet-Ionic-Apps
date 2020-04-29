import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ProductsPage } from '../products/products';
//import { MyListsPage } from '../my-lists/my-lists';
//import { WishListPage } from '../wish-list/wish-list';
import { WishlistViewPage } from '../wishlist-view/wishlist-view';
import { FavoriteViewPage } from '../favorite-view/favorite-view';

/**
 * Generated class for the ProductsCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-create',
  templateUrl: 'products-create.html',
})
export class ProductsCreatePage {

  data: Observable<any>;
  result:any=[];
  loading:any;
  rating:string;
  loginData = { name:'', info:'',buy:'', title:'',price:'',quan:'',were:'',rap:'' };
  dev = [];
  devs = {};
  base64Image:any;
  lang:any;
  user_id:string;
  status:any;
  url:string;
  fp_id:string;
  user_id_2:string;
  other_id:any;
  items:any;
  picture_new:any;
  new_id:string;
  new_id_prod:string;
  new_cout:string;
  res_user:any;



  create_prod:any;
  image_eng:any;
  update_image_eng:any;
  link_eng:any;
  title_eng:any;
  name_eng:any;
  where_buy_eng:any;
  price_eng:any;
  quantity_eng:any;
  prod_cat_eng:any;
  desc_eng:any;
  rating_eng:any;
  create_new_eng:any;
  fetch_eng:any;
  user_id_test:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController,
    public events: Events,
    private databaseProvider:DatabaseProvider,
    private camera: Camera) {

      this.res_user = navParams.get('res');
      this.user_id_test = navParams.get('user_id_test');
      this.status  = navParams.get('status');

      if(this.status==1){

       this.other_id = navParams.get('wish_id');

      }else if(this.status==2){

        this.other_id = navParams.get('fav_id');

      }else{
        this.other_id = null;
      }

      this.loadDB();

      events.subscribe('star-rating:changed', (starRating) => {
        console.log(starRating);
        this.rating = starRating;
      });
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
        

        this.create_prod = data['create_prod'];
        this.image_eng = data['image'];
        this.update_image_eng = data['update_image'];
        this.link_eng = data['link'];
        this.title_eng = data['title'];
        this.name_eng = data['name'];
        this.where_buy_eng = data['where_buy'];
        this.price_eng = data['price'];
        this.quantity_eng = data['quan'];
        this.prod_cat_eng = data['prod_cat'];
        this.desc_eng = data['description'];
        this.rating_eng = data['rating'];
        this.create_new_eng = data['create_new'];
        this.fetch_eng = data['fetchs'];
      })

      
      this.url = "http://api.givet.co.uk/api/get_all_cats.php";
      this.getData();

    })
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

  
  openModal(){
    
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'Choose where to take photos',
      
      buttons: [
        {
          text: 'Camera',
          handler: data => {
            this.openCamera();
          }
        },
        {
          text: 'Gallery',
          handler: data => {
            this.openGalery();
            
          }
        }
      ]
    });
    alert.present();


}

search(){
  
  this.presentLoadingDefault();
  var url = "http://api.givet.co.uk/api/fetch.php";
  let postData = new FormData();
  postData.append('url',this.loginData.buy);

  this.data = this.http.post(url,postData);

  this.data.subscribe(data =>{

  //alert(JSON.stringify(data));

  this.loginData.title = data['title'];
  this.loginData.name = data['name'];
  this.rating = data['stars'];
  this.loginData.price = data['price'];
  this.loginData.quan = "1";
  this.loginData.were = data['where'];
  this.loginData.info = data['description'];
  this.base64Image = data['image'].trim();
 


  let names = data['image'].split("data:image/jpeg;base64,");
//let firstName = names[0];

this.picture_new =names;
this.loading.dismiss();


  

  });

}


openGalery(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
  
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:false
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;

//alert(imageData)

  }, (err) => {
   // Handle error
  });

}



presentLoadingDefault() {
  this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  this.loading.present();

}


openCamera(){

  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
   
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;

 

    
  
  }, (err) => {
   // Handle error
  });

}


clickOption(id){

  this.new_cout = id;
}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Not all fields are filled.',
    buttons: ['Ok']
  });
  alert.present();
}

presentError() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Error establishing connection to server',
    buttons: ['Ok']
  });
  alert.present();
}


test(){
  alert(this.picture_new);
}

  save(){

    this.presentLoadingDefault();
   
   

    if(this.loginData.title.length <= 0 ){

      this.loading.dismiss();
      this.presentAlertTitle();

    }else if(this.loginData.name.length <= 0){

      this.loading.dismiss();
      this.presentAlertDesc();


    }else if(this.loginData.info.length <= 0){

      this.loading.dismiss();
      this.presentAlertDesc();


    }
    else if(this.loginData.price.length <= 0){

      this.loading.dismiss();
      this.presentAlertPrice();


    }
    else if(this.loginData.quan.length <= 0){

      this.loading.dismiss();
      this.presentAlertQuan();


    }
    else if(this.loginData.were.length <= 0){

      this.loading.dismiss();
      this.presentAlertWere();


    }else if(this.loginData.buy.length <= 0){

      this.loading.dismiss();
      this.presentAlertBuy();


    }else if(this.loginData.rap.length <= 0){

      this.loading.dismiss();
      this.presentAlertRap();


    }
     else{


    
        this.url = "http://api.givet.co.uk/api/create_product.php";
        let postData = new FormData();
        postData.append('user_id',this.user_id_2);
        postData.append('title',this.loginData.title);
        postData.append('name',this.loginData.name);
        postData.append('rating',this.rating);
        postData.append('link',this.loginData.buy);
        postData.append('price',this.loginData.price);
        postData.append('quatnity',this.loginData.quan);
        postData.append('where_buy',this.loginData.were);
        postData.append('info',this.loginData.info);
        this.data = this.http.post(this.url,postData);
    
        this.data.subscribe(data =>{

          this.loading.dismiss();

         
          
            if(data['max(id)']!=null){

             

              this.new_id_prod = data['max(id)'];
if(this.status==1){

   this.url = "http://api.givet.co.uk/api/add_prod_to_wish.php";



    let postData = new FormData();
    postData.append('wish_id',this.other_id);
    postData.append('prod_id',this.new_id_prod);
  
    this.new_id = data['max(id)'];
    this.data = this.http.post(this.url,postData);

    this.data.subscribe(data =>{

    

      this.url = "http://api.givet.co.uk/api/set_profile_image.php";
      let postData = new FormData();
      postData.append('img',this.picture_new);
      postData.append('user_id',this.new_id);
      postData.append('image_name','prod_image.jpg');
      postData.append('type','fav');
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
  
  
  
        this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
        let postData = new FormData();
        postData.append('prod_id',this.new_id);
        postData.append('cat_id',this.new_cout);
       
        this.data = this.http.post(this.url,postData);
    
        this.data.subscribe(data =>{
    
    
    if(data['status']=="200 OK"){

      this.loading.dismiss();
    
      this.navCtrl.pop();

      /*if(this.res_user==1){
        this.navCtrl.setRoot(WishlistViewPage,{id:this.other_id,res:this.res_user});
      }else{
        this.navCtrl.setRoot(WishlistViewPage,{id:this.other_id});
      }*/


    }else{

      this.loading.dismiss();
    
      this.presentError();

    }
    
         
    
        });
  
      });
  

     
    });



  }else if(this.status==2){

    this.url = "http://api.givet.co.uk/api/add_prod_to_fav.php";



    let postData = new FormData();
    postData.append('fav_id',this.other_id);
    postData.append('prod_id',this.new_id_prod);
  
    this.data = this.http.post(this.url,postData);
    this.new_id = this.new_id_prod;
    this.data.subscribe(data =>{



      this.url = "http://api.givet.co.uk/api/set_profile_image.php";
      let postData = new FormData();
      postData.append('img',this.picture_new);
      postData.append('user_id',this.new_id_prod);
      postData.append('image_name','prod_image.jpg');
      postData.append('type','fav');
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
  

      
        this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
        let postData = new FormData();
        postData.append('prod_id',this.new_id);
        postData.append('cat_id',this.new_cout);
       
        this.data = this.http.post(this.url,postData);
    
        this.data.subscribe(data =>{
    
    
    if(data['status']=="200 OK"){

      this.loading.dismiss();
    
      this.navCtrl.pop();
//this.navCtrl.setRoot(FavoriteViewPage,{id:this.other_id});

    }else{

      this.loading.dismiss();
    
      this.presentError();

    }
    
         
    
        });
  
      });
  


    });

    this.loading.dismiss();
  }else{


    this.url = "http://api.givet.co.uk/api/set_profile_image.php";
    let postData = new FormData();
    postData.append('img',this.picture_new);
    postData.append('user_id',this.new_id_prod);
    postData.append('image_name','prod_image.jpg');
    postData.append('type','fav');
    this.data = this.http.post(this.url,postData);
    this.new_id = this.new_id_prod;
    this.data.subscribe(data =>{



    
      this.url = "http://api.givet.co.uk/api/insert_prod_to_car.php";
      let postData = new FormData();
      postData.append('prod_id',this.new_id);
      postData.append('cat_id',this.new_cout);
     
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{


        
  
  
  if(data['status']=="200 OK"){

    this.loading.dismiss();
  
    this.navCtrl.pop();
//this.navCtrl.setRoot(ProductsPage,{reset:1,id:this.user_id_test});

  }else{

    this.loading.dismiss();
   
    this.presentError();

  }
  
       
  
      });

    });

    this.loading.dismiss();
  }




            
          }else{
              this.loading.dismiss();
            this.presentError();

            }

          console.log(this.loginData);
          console.log(data);

        });


      }



   
  }


  

  presentAlertRap() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Product category.',
      buttons: ['Ok']
    });
    alert.present();
  }


  presentAlertWere() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Where Buy.',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentAlertBuy() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Link.',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentAlertPrice() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Price.',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentAlertQuan() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Quantity.',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentAlertTitle() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Title.',
      buttons: ['Ok']
    });
    alert.present();
  }


  presentAlertName() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Name.',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  presentAlertDesc() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please complete the Description.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
