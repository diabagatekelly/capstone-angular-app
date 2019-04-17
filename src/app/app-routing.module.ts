import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthorSearchComponent } from './search/author-search/author-search.component';

const routes: Routes = [
  // {path: 'author-search', component: AuthorSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const RoutingComponents = [
//   AuthorSearchComponent
// ];
