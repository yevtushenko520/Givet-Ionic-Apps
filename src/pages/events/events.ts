import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EventsViewPage } from '../events-view/events-view';
import { EventsCreatePage } from '../events-create/events-create';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {


  data:Observable<any>;
  items:any;
  url:string;
  loading:any;
  dev = [];
  devs = {};
  reset:any;
  user_id:string;
  fp_id:string;
  public searchBar = false;
  queryText:string;
  lang:any;

  events_lang:any;
  create_new_lang:any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,private databaseProvider:DatabaseProvider) {

      this.reset = navParams.get('reset');

    
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
     

        this. events_lang = data['event'];
        this.create_new_lang = data['create_new'];
    
      })

      this.url = "http://api.givet.co.uk/api/my_events.php?user_id="+this.user_id;
      this.getData();

    })
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
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
  
    this.url = "http://api.givet.co.uk/api/search_event.php?event_name="+this.queryText+"&user_id="+this.user_id;
    this.data = this.http.get(this.url);
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
    this.loadDB();

  }


  getData(){
   
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
     

      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
       
    })

    this.loading.dismiss();
  }

  moToView(item){
    this.navCtrl.push(EventsViewPage,{
      id:item['id']
      });
  }


  moToCreate(){
    this.navCtrl.push(EventsCreatePage);
  }

}
