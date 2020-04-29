import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishlistCreatePage } from './wishlist-create';

@NgModule({
  declarations: [
    WishlistCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(WishlistCreatePage),
  ],
})
export class WishlistCreatePageModule {}
