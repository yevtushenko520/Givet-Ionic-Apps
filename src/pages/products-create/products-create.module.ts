import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsCreatePage } from './products-create';

@NgModule({
  declarations: [
    ProductsCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsCreatePage),
  ],
})
export class ProductsCreatePageModule {}
