import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsUpdatePage } from './groups-update';

@NgModule({
  declarations: [
    GroupsUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsUpdatePage),
  ],
})
export class GroupsUpdatePageModule {}
