import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsUpdatePage } from './events-update';

@NgModule({
  declarations: [
    EventsUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(EventsUpdatePage),
  ],
})
export class EventsUpdatePageModule {}
