import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedBooksComponent } from './featured/featured-books/featured-books.component';
import { FeaturedAuthorComponent } from './featured/featured-author/featured-author.component';
import { AuthorsService } from '../shared/authors.service';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    SearchBookComponent,
    SearchAuthorComponent,
    AboutComponent,
    FeaturedComponent,
    FeaturedBooksComponent,
    FeaturedAuthorComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
      HomepageComponent
    ],
  providers: [AuthorsService]
})

export class HomepageModule { }
