import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BooksService {
url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=vJHZHdvvWIqGBTaIsZksGRah94kH2n62';

constructor(private http: HttpClient) { }

getBooks() {
  return this.http.get<IBooks[]>(this.url);
}


// getBooks() {
//   return this.http
//       .get(this.url, {responseType: 'text'});
//       }
      }

