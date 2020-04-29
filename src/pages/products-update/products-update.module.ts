import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsUpdatePage } from './products-update';

@NgModule({
  declarations: [
    ProductsUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsUpdatePage),
  ],
})
export class ProductsUpdatePageModule {}
