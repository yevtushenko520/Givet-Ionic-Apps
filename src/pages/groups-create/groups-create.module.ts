import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsCreatePage } from './groups-create';

@NgModule({
  declarations: [
    GroupsCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsCreatePage),
  ],
})
export class GroupsCreatePageModule {}
