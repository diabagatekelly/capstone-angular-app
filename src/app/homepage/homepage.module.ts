import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    SearchBookComponent,
    SearchAuthorComponent,
    AboutComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      HomepageComponent
    ],
  providers: []
})

export class HomepageModule { }
