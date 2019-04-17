import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedBooksComponent } from './featured/featured-books/featured-books.component';
import { FeaturedAuthorComponent } from './featured/featured-author/featured-author.component';
import { AuthorsService } from '../shared/authors.service';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    FeaturedComponent,
    FeaturedBooksComponent,
    FeaturedAuthorComponent,
    SearchAuthorComponent,
    SearchBookComponent
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
