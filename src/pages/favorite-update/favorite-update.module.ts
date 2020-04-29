import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteUpdatePage } from './favorite-update';

@NgModule({
  declarations: [
    FavoriteUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteUpdatePage),
  ],
})
export class FavoriteUpdatePageModule {}
