import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { RegisterPage } from '../pages/register/register';
//import { LoginPage } from '../pages/login/login';
//import { WishListPage } from '../pages/wish-list/wish-list';
//import { TabsPage } from '../pages/tabs/tabs';
//import { SocialFriendsPage } from '../pages/social-friends/social-friends';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
//import { WishlistCreatePage } from '../pages/wishlist-create/wishlist-create';
//import { GroupsViewPage } from '../pages/groups-view/groups-view';
//import { WishListPage } from '../pages/wish-list/wish-list';
//import { TabsPage } from '../pages/tabs/tabs';
//import { ProductsPage } from '../pages/products/products';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
