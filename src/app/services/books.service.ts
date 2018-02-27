import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BooksService {

  private componentMethodCallSource = new Subject<any>();

  componentMethodCallSource$ = this.componentMethodCallSource.asObservable();

  public books: [''];
  constructor(){}
  testService(){
    console.log('service test success!');
  }
  setData(data){
    this.books = data;
    console.log(this.books);
    this.componentMethodCallSource.next();
    //alert books-search-result
  }
  getData(){
    return this.books;
  }
}
