import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  public bookshelf: any[] = [];

  constructor(private service:BooksService){
    this.service.bookshelfComponentMethodCallSource.subscribe(
      () => {
        //console.log(this.bookshelf);
        this.bookshelf = this.service.bookshelf;
      }
    )
  }
  ngOnInit() {}
  removeBook(data){
    this.service.removeFromBookshelf(data);
  }
  sortBookshelf(){
    this.bookshelf.sort(function(a, b){
      if(a.volumeInfo.title < b.volumeInfo.title) return -1;
      if(a.volumeInfo.title > b.volumeInfo.title) return 1;
      return 0;
    });
  }

}
