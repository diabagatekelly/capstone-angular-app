import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedBooksComponent } from './featured/featured-books/featured-books.component';
import { FeaturedAuthorComponent } from './featured/featured-author/featured-author.component';
import { AuthorsService } from '../shared/goodreads-authors.service';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { GoodreadsBooksService } from '../shared/goodreads-books.service';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    FeaturedComponent,
    FeaturedBooksComponent,
    FeaturedAuthorComponent,
    SearchAuthorComponent,
    SearchBookComponent,
    RoutingComponents,
     ],
    imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
      HomepageComponent
    ],
  providers: [AuthorsService, GoodreadsBooksService]
})

export class HomepageModule { }
