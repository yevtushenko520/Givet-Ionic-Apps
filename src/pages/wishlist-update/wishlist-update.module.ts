import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishlistUpdatePage } from './wishlist-update';

@NgModule({
  declarations: [
    WishlistUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(WishlistUpdatePage),
  ],
})
export class WishlistUpdatePageModule {}
