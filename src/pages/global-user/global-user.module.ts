import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalUserPage } from './global-user';

@NgModule({
  declarations: [
    GlobalUserPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalUserPage),
  ],
})
export class GlobalUserPageModule {}
