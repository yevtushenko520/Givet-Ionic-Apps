import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GroupsViewPage } from '../groups-view/groups-view';
import { GroupsCreatePage } from '../groups-create/groups-create';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  
  dev = [];
  devs = {};
  reset:any;
  user_id:string;
  fp_id:string;

  data:Observable<any>;
  data_info:Observable<any>;
  data_count:Observable<any>;
  items:any;
  items_count:any=[];
  group:any=[];
  url:string;
  url_2:string;
  url_search:string;
  url_count:string;
  loading:any;
  public searchBar = false;
  queryText:string;
  lang:any;
  group_lang:any;
  create_new:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient
    ,public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

   
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
      this.user_id = this.dev[0]['user_id'];


      
      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
    

        this.group_lang = data['groups'];
        this.create_new = data['create_new'];
    
      })


      this.url = "http://api.givet.co.uk/api/my_groups.php?user_id="+this.user_id;
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
   
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
    


    

      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
    
  this.loading.dismiss();
    })

   // this.loading.dismiss();
  }

  updateText(ev){

    if(this.queryText.length > 0 ){
    this.url_search = "http://api.givet.co.uk/api/search_group.php?group_name="+this.queryText+"&user_id="+this.user_id;
    this.data = this.http.get(this.url_search);
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
    this.url = "http://api.givet.co.uk/api/my_groups.php?user_id="+this.user_id;
    this.getData();


  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.url = "http://api.givet.co.uk/api/my_groups.php?user_id="+this.user_id;
    this.getData();


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



  moToView(item){
    this.navCtrl.push(GroupsViewPage,{
      id:item['id']
    });
  }


  moToCreate(){
    this.navCtrl.push(GroupsCreatePage);
  }

}
