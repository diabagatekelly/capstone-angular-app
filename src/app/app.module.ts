import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './homepage/homepage.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GoodreadsBooksService } from './shared/goodreads-books.service';
import { GetBookTitleService } from './shared/getbooktitle.service';
import { FilterAuthorNameService } from './shared/filterauthorname.service';
import { GetAuthorNameService } from './shared/getauthorname.service';
import { AuthorInfoService } from './shared/author-info.service';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [GoodreadsBooksService, GetBookTitleService, FilterAuthorNameService, GetAuthorNameService, AuthorInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
