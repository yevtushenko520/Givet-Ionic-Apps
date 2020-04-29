import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsViewPage } from './groups-view';

@NgModule({
  declarations: [
    GroupsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsViewPage),
  ],
})
export class GroupsViewPageModule {}
