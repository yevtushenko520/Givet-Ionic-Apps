import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { ProductsPage } from '../products/products';
import { ProductsViewPage } from '../products-view/products-view';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the ProductsUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-update',
  templateUrl: 'products-update.html',
})
export class ProductsUpdatePage {


  ids:string;
  
  data:Observable<any>;
  data_user:Observable<any>;
  data_like:Observable<any>;
  items:any;
  url:string;
  lang:any;
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
  base64Image:any;
  status:string;
  url_like:string;
  loginData = { name:'', info:'',buy:'', title:'',price:'',quan:'',were:'',rap:'' };
  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  loading:any;
  data_post: Observable<any>;
  result:any=[];
  picture_new:any;
  new_cout:any;
  cat_id:any;
  res_image:any;

  
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
  updates:any;
  

  constructor(private databaseProvider:DatabaseProvider,public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController,private alertCtrl: AlertController,
    public events: Events,
    private camera: Camera) {

      events.subscribe('star-rating:changed', (starRating) => {
        console.log(starRating);
        this.rating = starRating;
      });


      this.ids = navParams.get('id');
      this.getData();
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
        this.updates = data['updates'];
    
      })


      
      this.url_user = "http://api.givet.co.uk/api/get_cat_prod.php?prod_id="+this.ids;


      this.data_user = this.http.get(this.url_user);
    this.data_user.subscribe(data_user2 => {

   

      if(data_user2['status']=="400 OK"){
        this.loginData.rap = "0";
      }else{
        this.loginData.rap = data_user2['cat_id'];
      }
    

    })

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

    this.url = "http://api.givet.co.uk/api/info_product.php?fav_id="+this.ids;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

      this.user_id = data['user_id'];
      this.loginData.name = data['name'];
      this.loginData.info = data['details'];
      this.rating = data['rating'];
      this.loginData.title = data['title'];
      this.loginData.price = data['price'];
      this.loginData.quan = data['quan'];
      this.loginData.buy = data['link'];
      this.loginData.were = data['where_buy'];
      this.image= data['image'];

      

      var person = "http";
      
      
      var personRegExp = new RegExp(person);
      if (personRegExp.test(this.image)) {
          console.log(person + " is a philosopher.");
          this.test_2 = '1';
      } else {
        
          console.log(person + " is NOT a philosopher.");
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

    
     this.loadDB();
    

      
    

    })
      
    })

    
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

    this.res_image = 1;
  
    this.loading.dismiss();
    });
  
  }
  
  

  clickOption(id){

    this.new_cout = id;
    
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


    
        this.url = "http://api.givet.co.uk/api/update_product.php";
        let postData = new FormData();
        postData.append('fav_id',this.ids);
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

         
          if(this.picture_new !=null){

              this.url = "http://api.givet.co.uk/api/set_profile_image.php";
              let postData = new FormData();

           

           
              postData.append('img',this.picture_new);
              postData.append('user_id',this.ids);
              postData.append('image_name','prod_image.jpg');
              postData.append('type','fav');
              this.data = this.http.post(this.url,postData);
          
              this.data.subscribe(data =>{
          
          

                if(this.new_cout > 0){
          
                this.url = "http://api.givet.co.uk/api/update_prod_cat.php";
                let postData = new FormData();
                postData.append('prod_id',this.ids);
                postData.append('cat_id',this.new_cout);
               
                this.data = this.http.post(this.url,postData);
            
                this.data.subscribe(data =>{
            
                  this.loading.dismiss();
            if(data['status']=="200 OK"){
        
              this.loading.dismiss();
            
              //this.navCtrl.pop();
              this.navCtrl.setRoot(ProductsViewPage,{reset:1,id:this.ids});
        
            }else{
        
              this.loading.dismiss();
            
              this.presentError();
        
            }
            
                 
            
                });

              }else{
                this.loading.dismiss();
            
              //this.navCtrl.pop();
              this.navCtrl.setRoot(ProductsViewPage,{reset:1,id:this.ids});
              }

              this.loading.dismiss();
            
              //this.navCtrl.pop();
              this.navCtrl.setRoot(ProductsViewPage,{reset:1,id:this.ids});
          
              });
          



        

          console.log(this.loginData);
          console.log(data);

            }
            
            else if(this.new_cout > 0){

              

              this.url = "http://api.givet.co.uk/api/update_prod_cat.php";
              let postData = new FormData();
              postData.append('prod_id',this.ids);
              postData.append('cat_id',this.new_cout);
             
              this.data = this.http.post(this.url,postData);
          
              this.data.subscribe(data =>{
          
                this.loading.dismiss();
          if(data['status']=="200 OK"){
      
            this.loading.dismiss();
          
            //this.navCtrl.pop();
      this.navCtrl.setRoot(ProductsViewPage,{reset:1,id:this.ids});
      
          }else{
      
            this.loading.dismiss();
          
            this.presentError();
      
          }
          
               
          
              });


            }else{

              this.loading.dismiss();
          
            //this.navCtrl.pop();
      
            }

            this.loading.dismiss();
            this.navCtrl.setRoot(ProductsViewPage,{reset:1,id:this.ids});
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
   this.res_image = 1;


  }, (err) => {
   // Handle error
  });

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

 
   this.res_image = 1;
    
  
  }, (err) => {
   // Handle error
  });

}


}
