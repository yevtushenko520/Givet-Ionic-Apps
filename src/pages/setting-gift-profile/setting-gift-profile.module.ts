import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingGiftProfilePage } from './setting-gift-profile';

@NgModule({
  declarations: [
    SettingGiftProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingGiftProfilePage),
  ],
})
export class SettingGiftProfilePageModule {}
