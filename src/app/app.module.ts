import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GoodreadsBooksService } from './shared/goodreads-books.service';
import { GetBookTitleService } from './shared/getbooktitle.service';
import { FilterAuthorNameService } from './shared/filterauthorname.service';
import { GetAuthorNameService } from './shared/getauthorname.service';
import { AuthorInfoService } from './shared/author-info.service';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [GoodreadsBooksService, GetBookTitleService, FilterAuthorNameService, GetAuthorNameService,
    AuthorInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
