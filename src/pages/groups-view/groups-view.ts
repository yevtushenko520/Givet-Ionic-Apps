import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { GroupsUpdatePage } from '../groups-update/groups-update';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AddUsersPage } from '../add-users/add-users';
import { DatabaseProvider } from '../../providers/database/database';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GroupsPage } from '../groups/groups';
import { TabsPage } from '../tabs/tabs';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the GroupsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups-view',
  templateUrl: 'groups-view.html',
})
export class GroupsViewPage {


  dev = [];
  devs = {};
  
  user_id_2:string;
  fp_id:string;


  ids:string;
  
  data:Observable<any>;
  data_user:Observable<any>;
  data_group:Observable<any>;
  data_group_users:Observable<any>;
  data_post:Observable<any>;
  data_check:Observable<any>;
  items:any;
  url:string;

  url_user:string;

  url_group:string;
  url_group_users:string;

  url_check:string;
  test:string;
  user_id:string;
  name:string;
  description:string;
  image:string;
  type:string;
  items_users:any=[];
  loading:any;
  user_name:string;
  user_surename:string;
  user_email:string;
  user_image:string;
  user_in_group:string;
  loginData = { title:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,
    private alertCtrl: AlertController,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider,private socialSharing: SocialSharing) {
    this.ids = navParams.get('id');
 
   
  }

 
  ionViewDidEnter() {
    this.loadDB();
}


  loadDB(){
    this.presentLoadingDefault();
    this.databaseProvider.getUsers().then(data =>{
    this.dev  = data;

      //alert(JSON.stringify(this.dev[0]['fp_id']));

      this.fp_id = this.dev[0]['fp_id'];
      this.user_id_2 = this.dev[0]['user_id'];

      this.url = "http://api.givet.co.uk/api/info_group.php?group_id="+this.ids;
      this.getData();

    })
  }
  

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  share(){
    // Check if sharing via email is supported
this.socialSharing.share("http://api.givet.co.uk/backend/web/index.php?r=site/group_page&id="+this.ids).then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});
  }



  getData(){
    
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {

      this.user_id = data['user_id'];
      this.name = data['name'];
      this.loginData.title = data['name'];
      this.description = data['description'];
      this.image = data['image'];
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

      this.url_group = "http://api.givet.co.uk/api/user_in_group.php?group_id="+this.ids;


      this.data_group = this.http.get(this.url_group);
      this.data_group.subscribe(data_group => {

        this.url_check = "http://api.givet.co.uk/api/check_user_in_group.php?group_id="+this.ids+"&user_id="+this.user_id_2;


        this.data_check = this.http.get(this.url_check);
      this.data_check.subscribe(data_check => {

        
        if(data_check['status']=="200 OK"){

          this.user_in_group = '1';
        }else{
          this.user_in_group = '0';
        }
      })

      this.items_users = data_group;

      this.loading.dismiss();

      })

    })
      
    })

   // this.loading.dismiss();
  }

  addUser(){

    var url = "http://api.givet.co.uk/api/send_user_in_group.php";
    let postData = new FormData();
    postData.append('user_id',this.user_id_2);
    postData.append('group_id',this.ids);
    postData.append('add','0');

    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['user']['status']=="200 OK"){

        this.presentLoadingDefault();
       this.url = "http://api.givet.co.uk/api/info_group.php?group_id="+this.ids;
       this.getData();
 
        
      }else{
   

        this.presentError();
      }
  console.log(data);
    });
  }



  leav(){
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you really want to leave the group?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
           this.del2();
          }
        },
      
        {
          text: 'Cancel',
          role: 'cancel',
         
        }
      ]
    });
    alert.present();
  }

  del2(){

    var url = "http://api.givet.co.uk/api/delete_user_froup.php";
        let postData = new FormData();
        postData.append('group_id',this.ids);
        postData.append('user_id',this.user_id_2);

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
        
          this.presentLoadingDefault();
          this.url = "http://api.givet.co.uk/api/info_group.php?group_id="+this.ids;
          this.getData();
            
          
     
        });

  }

  del(item){

    var url = "http://api.givet.co.uk/api/delete_user_froup.php";
        let postData = new FormData();
        postData.append('group_id',this.ids);
        postData.append('user_id',item['id']);

        this.data_post = this.http.post(url,postData);
    
        this.data_post.subscribe(data =>{
        
    
         this.loadDB();
        });

  }

  moToCreate(id){
    this.navCtrl.push(GroupsUpdatePage,{
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
  presentConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to delete this group?',
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


            var url = "http://api.givet.co.uk/api/delete_group.php";
    let postData = new FormData();
    postData.append('group_id',id);
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{
      if(data['group']['status']=="OK"){

        this.navCtrl.pop();
        
      }else{
        this.navCtrl.pop();
      }
  console.log(data);
    });
            


          }
        }
      ]
    });
    alert.present();
  }

  openModal(id) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:id
    });
  }

  openModalFriend(id) {

    this.navCtrl.push(AddUsersPage,{
      id:id,
    });

    
  }

  openModalTwo(id) {
  
    this.navCtrl.push(UserProfilePage,{
      ides:id['id']
    });
  }

  

}
