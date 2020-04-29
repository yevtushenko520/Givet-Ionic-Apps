import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserFavlistPage } from './user-favlist';

@NgModule({
  declarations: [
    UserFavlistPage,
  ],
  imports: [
    IonicPageModule.forChild(UserFavlistPage),
  ],
})
export class UserFavlistPageModule {}
