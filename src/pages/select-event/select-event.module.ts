import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectEventPage } from './select-event';

@NgModule({
  declarations: [
    SelectEventPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectEventPage),
  ],
})
export class SelectEventPageModule {}
