
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterArticleDetailComponent } from '../footer-article-detail/footer-article-detail.component';
import { MainTopArticleDetailComponent } from '../main-top-article-detail/main-top-article-detail.component';
import { MainBottomArticleDetailComponent } from '../main-bottom-article-detail/main-bottom-article-detail.component';
import { HeaderArticleDetailComponent } from '../header-article-detail/header-article-detail.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';




@NgModule({
  declarations: [
    HeaderArticleDetailComponent,
    MainBottomArticleDetailComponent,
    MainTopArticleDetailComponent,
    FooterArticleDetailComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule
  ],

})
export class ArticalDetailModule { }
