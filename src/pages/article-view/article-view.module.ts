import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleViewPage } from './article-view';

@NgModule({
  declarations: [
    ArticleViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleViewPage),
  ],
})
export class ArticleViewPageModule {}
