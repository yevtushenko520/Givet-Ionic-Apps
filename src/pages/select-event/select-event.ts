import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsPage } from '../events/events';
import { EventsViewPage } from '../events-view/events-view';
/**
 * Generated class for the SelectEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-event',
  templateUrl: 'select-event.html',
})
export class SelectEventPage {

  data:Observable<any>;
  data2:Observable<any>;
  data3:Observable<any>;
  items:any;
  items2:any;
  items3:any;
  url:string;
  loading:any;
  reset:any;
  dev = [];
  devs = {};
  pepperoni:any;

  status:any;

  url2:string;
  url3:string;

  other_id:any;
  items_dota:any=[];
  search:any=[];
  
  user_id_2:string;
  fp_id:string;

  cucumber: boolean;
  select_wish:any;
  create_new:any;
  add_lang:any;

  queryText:string;

  public searchBar = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController,  private databaseProvider:DatabaseProvider) {

      this.other_id = navParams.get('event_id');

    this.loadDB();
  }


  updateText(ev){
 
  
    if(this.queryText.length > 0 ){
    this.url = "http://api.givet.co.uk/api/search_select_wish.php?fav_title="+this.queryText+"&event_id="+this.other_id+"&user_id="+this.user_id_2;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
     if(data['status']!="400 OK"){
      this.items_dota = data;
     }else if(data['status']=="400 OK"){
      this.items_dota = null;
     }
     

      
    })

  }

  }

  cancelSearch(){

    this.searchBar=false;
    this.url = "http://api.givet.co.uk/api/get_wish_for_event.php?event_id="+this.other_id+"&user_id="+this.user_id_2;
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

        
      
          this.select_wish = data['select_wish'];
          this.create_new = data['create_new'];
          this.add_lang = data['adds'];
      })

      this.url = "http://api.givet.co.uk/api/get_wish_for_event.php?event_id="+this.other_id+"&user_id="+this.user_id_2;
    this.getData();

    })
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  updateCucumber(item) {
  
    this.url = "http://api.givet.co.uk/api/insert_prod_in_cache.php?user_id="+this.user_id_2+"&prod_id="+item['id'];
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;


    });


  }

  save(){
    this.presentLoadingDefault();
    this.url = "http://api.givet.co.uk/api/select_cache.php?user_id="+this.user_id_2;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      this.items = data;


      if(data!=null){


          for(let god of data){

            var url2 = "http://api.givet.co.uk/api/add_wish_to_event.php";
            let postData = new FormData();
            postData.append('event_id',this.other_id);
            postData.append('wish_id',god['prod_id']);
       
            this.data2 = this.http.post(url2,postData);
        
            this.data2.subscribe(data =>{
    
        
            });
  
  
          }
  
   
        

        this.url = "http://api.givet.co.uk/api/delete_cache.php?user_id="+this.user_id_2;
        this.data = this.http.get(this.url);
        this.data.subscribe(data => {
          this.items = data;

          this.loading.dismiss();

          this.navCtrl.setRoot(EventsViewPage,{id:this.other_id});
  

        });
      
      }else{
        this.loading.dismiss();

        this.navCtrl.setRoot(EventsPage,{
          reset:1
        })
      }
    });

    this.loading.dismiss();
  }


  getData(){
  
    this.presentLoadingDefault();
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
     
      if(data['status']!="400 OK"){
        this.items_dota = data;
       }else if(data['status']=="400 OK"){
        this.items_dota = null;
       }
       
       
  
        this.loading.dismiss();
       
     



    })

   // this.loading.dismiss();
  }

}
