import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.components';
import { ArticlesGuard } from './guards/articles.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticlesModule),
    data: { feature: 'articles', permissions: 'articles-read' },
    canActivate: [ArticlesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
