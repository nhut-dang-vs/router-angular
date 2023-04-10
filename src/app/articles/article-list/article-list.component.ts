import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <ul>
      <li
        *ngFor="let article of articles$ | async"
        style="border: 1px solid black; padding: 20px; margin-bottom: 20px"
      >
        {{ article.title }}
        <br />
        <a
          style="cursor: pointer; text-decoration: underline;"
          (click)="onReadMoreClick(article.slug)"
          >Read more</a
        >
      </li>
    </ul>
  `,
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }

  onReadMoreClick(slug: string) {
    this.router.navigate(['/articles', slug]);
  }
}
