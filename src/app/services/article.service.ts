import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  get articles$() {
    return of<Article[]>([
      { title: 'Title 1', body: 'Something true', slug: 'title-1' },
      { title: 'Title 2', body: 'Something entirely true', slug: 'title-2' },
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string) {
    return this.articles$.pipe(
      map((articles: Article[]) =>
        articles.find((article: Article) => article.slug === slug)
      )
    );
  }
}
