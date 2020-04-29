import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialFriendsPage } from './social-friends';

@NgModule({
  declarations: [
    SocialFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialFriendsPage),
  ],
})
export class SocialFriendsPageModule {}
