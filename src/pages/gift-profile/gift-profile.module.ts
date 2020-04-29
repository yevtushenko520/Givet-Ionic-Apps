import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftProfilePage } from './gift-profile';

@NgModule({
  declarations: [
    GiftProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(GiftProfilePage),
  ],
})
export class GiftProfilePageModule {}
