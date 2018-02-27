import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'books-search-result',
  templateUrl: './books-search-result.component.html',
  styleUrls: ['./books-search-result.component.css']
})
export class BooksSearchResultComponent implements OnInit {
  books = [];

  //when service.setMethod(data) is called, the subscribe method will update our books array with the new one
  constructor(private service:BooksService){
    this.service.componentMethodCallSource$.subscribe(
      () => {
        this.books = this.service.books;
      }
    )
  }
  ngOnInit(){}
  setBooks(data){
    this.books = data;
  }
}
