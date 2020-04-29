import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsViewPage } from './products-view';

@NgModule({
  declarations: [
    ProductsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsViewPage),
  ],
})
export class ProductsViewPageModule {}
