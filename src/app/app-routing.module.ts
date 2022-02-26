import { PopupComponent } from './components/popup/popup.component';
import { AllArticleIndexComponent } from './all-article/all-article-index/all-article-index.component';
import { ArticleDetailComponent } from './article-detail-all/article-detail/article-detail.component';
import { DemoAngularComponent } from './components/demo-angular/demo-angular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'demo-angular', component:DemoAngularComponent},
  {path: 'article-detail', component: ArticleDetailComponent},
  {path: 'all-article-index', component: AllArticleIndexComponent},
  {path: 'popup', component: PopupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
