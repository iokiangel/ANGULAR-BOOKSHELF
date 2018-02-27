import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';

import { AppComponent } from './app.component';
import { BooksSearchResultComponent } from './books-search-result/books-search-result.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BooksSearchComponent } from './books-search/books-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksSearchResultComponent,
    BookshelfComponent,
    BooksSearchComponent
  ],
  imports: [BrowserModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
