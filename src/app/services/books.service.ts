import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BooksService {

  public bookSearchResultComponentMethodCallSource = new Subject<any>();
  bookSearchResultComponentMethodCallSource$ = this.bookSearchResultComponentMethodCallSource.asObservable();

  public bookshelfComponentMethodCallSource = new Subject<any>();
  bookshelfComponentMethodCallSource$ = this.bookshelfComponentMethodCallSource.asObservable();



  public books: any[] = [];
  public bookshelf: any[] = [];

  constructor(){}
  testService(){
    console.log('service test success!');
  }
  //sets books
  setData(data){
    this.books = data;
    //console.log(this.books);
    this.bookSearchResultComponentMethodCallSource.next();
    //alert books-search-result
  }
  //adds to bookshelf
  addToBookshelf(data){
    this.bookshelf.push(data);
    //console.log(this.bookshelf);
    this.bookshelfComponentMethodCallSource.next();
  }
  //remove book from bookshelf
  removeFromBookshelf(data){
    var index = this.bookshelf.indexOf(data, 0);
    //console.log(index);
    if(index > -1){
      this.bookshelf.splice(index, 1);
      //console.log('spliced');
    }
    this.bookshelfComponentMethodCallSource.next();
  }
  //sets bookshelf to a new bookshelf
  setBookshelf(data){
    this.bookshelf = data;
  }

  getData(){
    return this.books;
  }
}
