import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { Observable, of, filter, find } from 'rxjs';
import { switchMap, pluck } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="article$ | async as article; else noArticle">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </ng-container>
    <ng-template #noArticle> No article found</ng-template>
  `,
  styles: [],
})
export class ArticleDetailComponent implements OnInit {
  article$!: Observable<Article | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap((slug: string) => this.articleService.getArticle(slug)),
      filter((article: Article | undefined) => !!article)
    );
  }
}
