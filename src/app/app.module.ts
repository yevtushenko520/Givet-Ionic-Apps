import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Keyboard } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WishListPage } from '../pages/wish-list/wish-list';
import { EventsPage } from '../pages/events/events';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { GroupsPage } from '../pages/groups/groups';
import { MyListsPage } from '../pages/my-lists/my-lists';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPage } from '../pages/forget/forget';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HttpClientModule } from '@angular/common/http';
import { GiftProfilePage } from '../pages/gift-profile/gift-profile';
import { FriendsPage } from '../pages/friends/friends';
import { SocialFriendsPage } from '../pages/social-friends/social-friends';
import { SettingProfilePage } from '../pages/setting-profile/setting-profile';
import { WishlistViewPage } from '../pages/wishlist-view/wishlist-view';
import { WishlistUpdatePage } from '../pages/wishlist-update/wishlist-update';
import { WishlistCreatePage } from '../pages/wishlist-create/wishlist-create';
import { SettingGiftProfilePage } from '../pages/setting-gift-profile/setting-gift-profile';
import { ModalProfilePage } from '../pages/modal-profile/modal-profile';
import { FavoriteUpdatePage } from '../pages/favorite-update/favorite-update';
import { FavoriteCreatePage } from '../pages/favorite-create/favorite-create';
import { FavoriteViewPage } from '../pages/favorite-view/favorite-view';
import { GroupsUpdatePage } from '../pages/groups-update/groups-update';
import { GroupsCreatePage } from '../pages/groups-create/groups-create';
import { GroupsViewPage } from '../pages/groups-view/groups-view';
import { EventsViewPage } from '../pages/events-view/events-view';
import { EventsCreatePage } from '../pages/events-create/events-create';
import { EventsUpdatePage } from '../pages/events-update/events-update';
import { UserGiftprofilePage } from '../pages/user-giftprofile/user-giftprofile';
import { UserFriendsPage } from '../pages/user-friends/user-friends';
import { UserGroupsPage } from '../pages/user-groups/user-groups';
import { UserWishlistPage } from '../pages/user-wishlist/user-wishlist';
import { UserEventsPage } from '../pages/user-events/user-events';
import { UserFavlistPage } from '../pages/user-favlist/user-favlist';
import { AddUsersPage } from '../pages/add-users/add-users';
import { Ionic2RatingModule } from 'ionic2-rating';
import { StarRatingModule } from 'ionic3-star-rating';  
import firebase from 'firebase';
import { SQLite } from '@ionic-native/sqlite';

import {DatabaseProvider} from '../providers/database/database';

import {IonicStorageModule} from '@ionic/storage';

import {HttpModule} from '@angular/http';
import { File } from '@ionic-native/file';

import {SQLitePorter} from '@ionic-native/sqlite-porter';
import { Camera } from '@ionic-native/camera';

import { FileTransfer } from '@ionic-native/file-transfer';
import { ProductsPage } from '../pages/products/products';
import { ProductsCreatePage } from '../pages/products-create/products-create';
import { ProductsUpdatePage } from '../pages/products-update/products-update';
import { ProductsViewPage } from '../pages/products-view/products-view';
import { SelectProductPage } from '../pages/select-product/select-product';
import { SelectEventPage } from '../pages/select-event/select-event';
import { GlobalProductPage } from '../pages/global-product/global-product';
import { GlobalUserPage } from '../pages/global-user/global-user';
import { GalleryPage } from '../pages/gallery/gallery';
import { ArticlesPage } from '../pages/articles/articles';
import { ArticleViewPage } from '../pages/article-view/article-view';
import { GalleryViewPage } from '../pages/gallery-view/gallery-view';
import { UserProfilePage } from '../pages/user-profile/user-profile';

firebase.initializeApp({
  apiKey: "AIzaSyAZRlslDJZa0VHgOSmdbobJJjy4I4QFroY",
  authDomain: "givet-220516.firebaseapp.com",
  databaseURL: "https://givet-220516.firebaseio.com",
  projectId: "givet-220516",
  storageBucket: "givet-220516.appspot.com",
  messagingSenderId: "114192688377"
});
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProductsPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserProfilePage,
    WishListPage,
    SelectProductPage,
    EventsPage,
    MyProfilePage,
    GroupsPage,
    MyListsPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    GiftProfilePage,
    FriendsPage,
    SocialFriendsPage,
    SettingProfilePage,
    WishlistViewPage,
    WishlistUpdatePage,
    WishlistCreatePage,
    SettingGiftProfilePage,
    ModalProfilePage,
    FavoriteCreatePage,
    FavoriteUpdatePage,
    FavoriteViewPage,
    GroupsUpdatePage,
    GroupsCreatePage,
    GroupsViewPage,
    EventsViewPage,
    SelectEventPage,
    EventsCreatePage,
    EventsUpdatePage,
    UserGiftprofilePage,
    UserFriendsPage,
    UserGroupsPage,
    UserWishlistPage,
    UserEventsPage,
    UserFavlistPage,
    ProductsCreatePage,
    ProductsUpdatePage,
    ProductsViewPage,
    AddUsersPage,
    GlobalProductPage,
    GlobalUserPage,
    GalleryPage,
    ArticleViewPage,
    GalleryViewPage,
    ArticlesPage
  ],
  imports: [
    StarRatingModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UserProfilePage,
    ArticleViewPage,
    GlobalProductPage,
    GlobalUserPage,
    GalleryPage,
    ArticlesPage,
    GalleryViewPage,
    ProductsPage,
    ProductsCreatePage,
    ProductsUpdatePage,
    ProductsViewPage,
    ContactPage,
    HomePage,
    TabsPage,
    WishListPage,
    EventsPage,
    SelectEventPage,
    MyProfilePage,
    GroupsPage,
    MyListsPage,
    LoginPage,
    SelectProductPage,
    RegisterPage,
    ForgetPage,
    GiftProfilePage,
    FriendsPage,
    SocialFriendsPage,
    SettingProfilePage,
    WishlistViewPage,
    WishlistUpdatePage,
    WishlistCreatePage,
    SettingGiftProfilePage,
    ModalProfilePage,
    FavoriteCreatePage,
    FavoriteUpdatePage,
    FavoriteViewPage,
    GroupsUpdatePage,
    GroupsCreatePage,
    GroupsViewPage,
    EventsViewPage,
    EventsCreatePage,
    EventsUpdatePage,
    UserGiftprofilePage,
    UserFriendsPage,
    UserGroupsPage,
    UserWishlistPage,
    UserEventsPage,
    UserFavlistPage,
    AddUsersPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    SocialSharing ,
    PhotoViewer,
    Keyboard,
    SQLitePorter,
    DatabaseProvider,
    Camera,
    FileTransfer,
    File
  ]
})
export class AppModule {}
