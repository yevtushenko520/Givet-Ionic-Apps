import { Component } from '@angular/core';


import { WishListPage } from '../wish-list/wish-list';
import { MyListsPage } from '../my-lists/my-lists';
import { GroupsPage } from '../groups/groups';
import { EventsPage } from '../events/events';
import { MyProfilePage } from '../my-profile/my-profile';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WishListPage;
  tab2Root = MyListsPage;
  tab3Root = GroupsPage;
  tab4Root = EventsPage;
  tab5Root = MyProfilePage;
  dev = [];
  user_id_2:string;
  fp_id:string;
  url:string;
  data:Observable<any>;
  lang:any;
  valueforngif=true;

  wishlist_lang: string = 'anything';
  list_lang: string = 'anything';
  group_lang: string = 'anything';
  event_lang: string = 'anything';
  profile_lang: string = 'anything';

  constructor(public navCtrl: NavController,private databaseProvider:DatabaseProvider, public http:HttpClient) {
    
 this.loadDB();

  }

  ionViewDidEnter() {
    window.addEventListener('keyboardWillShow', this.showListener);
    window.addEventListener('keyboardDidHide', this.hideListener);
    if (localStorage.getItem('token') === null) this.navCtrl.setRoot("LoginPage")
      // remove the event listener when something goes wrong in your token or session
    // }
  }

  ionViewWillLeave() {
    window.removeEventListener('keyboardWillShow', this.showListener);
    window.removeEventListener('keyboardDidHide', this.hideListener);
  }

  showListener() {
    console.log('keyboard visible');
    document.getElementById('TabBarOpen').classList.add('keyboard-is-open');
  }
  hideListener() {
    console.log('keyboard hides');
    document.getElementById('TabBarOpen').classList.remove('keyboard-is-open');
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

        this.wishlist_lang = data['wishlist'];
        this.list_lang = data['list'];
        this.group_lang = data['groups'];
        this.event_lang = data['event'];
        this.profile_lang = data['profile_tab'];
    
      })

    })
  }


}
