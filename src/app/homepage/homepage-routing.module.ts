import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBookResultsComponent } from './search-book/search-book-results/search-book-results.component';
import { HomepageComponent } from './homepage.component';
import { SearchAuthorResultsComponent } from './search-author/search-author-results/search-author-results.component';
import { AboutComponent } from './about/about.component';
import { AuthorPageComponent } from '../homepage/info/author-page/author-page.component';
import { BookPageComponent } from '../homepage/info/book-page/book-page.component';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: HomepageComponent },
  // {path: 'about', component: AboutComponent},
  { path: 'search-author-results', component: SearchAuthorResultsComponent },
  { path: 'search-book-results', component: SearchBookResultsComponent },
  { path: 'search-author-results/:authors', component: AuthorPageComponent },
  { path: 'search-book-results/:books', component: BookPageComponent },
  { path: 'home/:books', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  SearchBookResultsComponent,
  SearchAuthorResultsComponent,
  HomepageComponent,
  AboutComponent,
  AuthorPageComponent,
  BookPageComponent
];
