import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { articlesRoutes } from './articles.routes';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent],
  imports: [CommonModule, RouterModule.forChild(articlesRoutes)],
})
export class ArticlesModule {}
