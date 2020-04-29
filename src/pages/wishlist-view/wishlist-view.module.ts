import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishlistViewPage } from './wishlist-view';

@NgModule({
  declarations: [
    WishlistViewPage,
  ],
  imports: [
    IonicPageModule.forChild(WishlistViewPage),
  ],
})
export class WishlistViewPageModule {}
