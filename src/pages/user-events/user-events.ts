import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EventsViewPage } from '../events-view/events-view';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the UserEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-events',
  templateUrl: 'user-events.html',
})
export class UserEventsPage {

  data:Observable<any>;
  items:any;
  url:string;
  ides:string;
  loading:any;
  public searchBar = false;
  queryText:string;
  dev = [];
  user_id_2:string;
  fp_id:string;
  
  lang:any;
  events_lang:any;

  constructor(private databaseProvider:DatabaseProvider,public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController) {
    this.ides = navParams.get('id');


    this.url = "http://api.givet.co.uk/api/my_events.php?user_id="+this.ides;
    this.getData();
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


      this.url = "http://api.givet.co.uk/api/get_lang.php?user_id="+this.user_id_2;
      this.data = this.http.get(this.url);
      this.data.subscribe(data => {
      

        this.events_lang = data['event'];
    
      })

    })
  }

  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.url = "http://api.givet.co.uk/api/my_events.php?user_id="+this.ides;
    this.getData();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  updateText(ev){
 
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_event.php?event_name="+this.queryText+"&user_id="+this.ides;
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
    this.url = "http://api.givet.co.uk/api/my_events.php?user_id="+this.ides;
    this.getData();

  }

  getData(){
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
      this.loading.dismiss();
      this.loadDB();
    })

    this.loading.dismiss();
  }


  moToView(item){
    this.navCtrl.push(EventsViewPage,{
      id:item['id']
      });
  }

}
