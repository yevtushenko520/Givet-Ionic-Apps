import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalProductPage } from './global-product';

@NgModule({
  declarations: [
    GlobalProductPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalProductPage),
  ],
})
export class GlobalProductPageModule {}
