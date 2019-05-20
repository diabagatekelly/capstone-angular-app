import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books.interface';

@Injectable({
  providedIn: 'root'
})

export class NYTBooksService {
  urlFiction =
    'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=vJHZHdvvWIqGBTaIsZksGRah94kH2n62';

  urlNonfiction =
    'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=vJHZHdvvWIqGBTaIsZksGRah94kH2n62';

  urlChildren = 'https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?api-key=vJHZHdvvWIqGBTaIsZksGRah94kH2n62';

  urlYoungAdult = 'https://api.nytimes.com/svc/books/v3/lists/current/young-adult.json?api-key=vJHZHdvvWIqGBTaIsZksGRah94kH2n62';

  constructor(private http: HttpClient) { }

  getFictionBooks() {
    return this.http.get<IBooks[]>(this.urlFiction);
  }

  getNonfictionBooks() {
    return this.http.get<IBooks[]>(this.urlNonfiction);
  }

  getPictureBooks() {
    return this.http.get<IBooks[]>(this.urlChildren);
  }

  getYoungAdultBooks() {
    return this.http.get<IBooks[]>(this.urlYoungAdult);
  }
}

