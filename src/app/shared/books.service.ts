import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
url = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/book/show/41865.xml?key=oybtOOeDZcd9cbsJTJCTg';

constructor(private http: HttpClient) { }

getBooks() {
  return this.http
      .get(this.url, {responseType: 'text'});
      }
      }

