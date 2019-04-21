import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBookResultsComponent } from './search-book/search-book-results/search-book-results.component';
import { HomepageComponent } from './homepage.component';
import { SearchAuthorResultsComponent } from './search-author/search-author-results/search-author-results.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'search-author-results', component: SearchAuthorResultsComponent},
  {path: 'search-book-results', component: SearchBookResultsComponent}
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
  AboutComponent
];
