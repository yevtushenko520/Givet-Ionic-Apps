import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ArticleViewPage } from '../article-view/article-view';
/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
    public loadingCtrl: LoadingController) {

      this.presentLoadingDefault();
      
    this.url = "http://api.givet.co.uk/api/article.php";
    this.getData();

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
      this.items = data;
      this.loading.dismiss();
    })

    this.loading.dismiss();
  }

  moToView(item){
    this.navCtrl.push(ArticleViewPage,{
      id:item['id']
      }); 
  }


}
