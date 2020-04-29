import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsViewPage } from './events-view';

@NgModule({
  declarations: [
    EventsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsViewPage),
  ],
})
export class EventsViewPageModule {}
