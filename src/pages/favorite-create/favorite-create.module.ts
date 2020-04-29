import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteCreatePage } from './favorite-create';

@NgModule({
  declarations: [
    FavoriteCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteCreatePage),
  ],
})
export class FavoriteCreatePageModule {}
