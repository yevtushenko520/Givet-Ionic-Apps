import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';


import { EventsUpdatePage } from '../events-update/events-update';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { WishlistViewPage } from '../wishlist-view/wishlist-view';
import { WishlistCreatePage } from '../wishlist-create/wishlist-create';
import { SelectEventPage } from '../select-event/select-event';
import { EventsPage } from '../events/events';
import { SocialSharing } from '@ionic-native/social-sharing';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the EventsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-view',
  templateUrl: 'events-view.html',
})
export class EventsViewPage {

  ids:string;
  dev = [];
  devs = {};
  
  user_id_2:string;
  fp_id:string;
  data:Observable<any>;
  data_user:Observable<any>;
  items:any;
  url:string;
  data2:Observable<any>;
  items_dota:any=[];
  url2:string;
  url_user:string;
  test:string;
  user_id:string;
  name:string;
  description:string;
  date:string;
  time:string;
  repeat:string;
  loginData = { title:'' };
  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  url228:string;
  data_products: Observable<any>;
  loading:any;
  lang:any;
  delete_lang:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,private socialSharing: SocialSharing) {

    this.ids = navParams.get('id');

  

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
        this.lang = data['lang_id'];
        this.delete_lang = data['del'];
    
      })


     
      this.url228 = "http://api.givet.co.uk/api/get_wish_from_event.php?event_id="+this.ids;

      
      this.data_products = this.http.get(this.url228);
      this.data_products.subscribe(data_new => {
       // this.data_products = data_new;

       if(data_new['status']!="400 OK"){
        this.items_dota = data_new;
       }else if(data_new['status']=="400 OK"){
        this.items_dota = null;
       }
       
      

        
      })

      this.url = "http://api.givet.co.uk/api/info_events.php?event_id="+this.ids;
      this.getData();


    })

   // this.loading.dismiss();
  }


  moToView(item){
    this.navCtrl.push(WishlistViewPage,{
      id:item['id'],
      res:2,
      id_wish:this.ids
    });
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

      this.user_id = data['user_id'];
      this.name = data['name'];
      this.loginData.title = data['name'];
      this.description = data['description'];
      this.date = data['date'];
      this.time = data['time'];
      this.repeat = data['repeat'];

      this.url_user = "http://api.givet.co.uk/api/my_profile.php?user_id="+this.user_id_2;


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
            this.navCtrl.push(SelectEventPage,{
            
              event_id:this.ids
            });

          }
        },
        {
          text: 'Create new',
          role: 'cancel',
          handler: () => {
            this.navCtrl.push(WishlistCreatePage,{
              status:1,
              event_id:this.ids
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


  share(){
    // Check if sharing via email is supported
this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/event_page&id="+this.ids).then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});
  }


  del(item){

    this.presentLoadingDefault();
    var url = "http://api.givet.co.uk/api/delete_wish_from_event.php";
let postData = new FormData();
postData.append('event_id',this.ids);
postData.append('wish_id',item.id);
this.data = this.http.post(url,postData);

this.data.subscribe(data =>{


this.loading.dismiss();
this.navCtrl.setRoot(EventsViewPage,{id:this.ids});



});

  }
  


  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to delete this event?',
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
            var url = "http://api.givet.co.uk/api/delete_event.php";
    let postData = new FormData();
    postData.append('event_id',id);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['event']['status']=="OK"){
        this.loading.dismiss();
        this.navCtrl.setRoot(EventsPage,{reset:1});

        
      }else{
        this.loading.dismiss();
        this.navCtrl.setRoot(EventsPage,{reset:1});
      }
  console.log(data);
    });
            


          }
        }
      ]
    });
    alert.present();
    this.loading.dismiss();
  }

  moToCreate(id){
    this.navCtrl.push(EventsUpdatePage,{
      id:id
    });
  }

 
  openModal(id) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:id
    });
  }

}
