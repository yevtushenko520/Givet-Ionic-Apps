import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserWishlistPage } from './user-wishlist';

@NgModule({
  declarations: [
    UserWishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(UserWishlistPage),
  ],
})
export class UserWishlistPageModule {}
