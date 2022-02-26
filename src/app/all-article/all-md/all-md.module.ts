import { FooterArticlesComponent } from '../footer-article/footer-article.component';
import { MainArticlesComponent } from '../main-article/main-article.component';
import { HeaderArticlesComponent } from '../header-article/header-article.component';
import { AllArticleIndexComponent } from '../all-article-index/all-article-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainArticlesComponent,
    FooterArticlesComponent,
    HeaderArticlesComponent,
    AllArticleIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AllMdModule { }
