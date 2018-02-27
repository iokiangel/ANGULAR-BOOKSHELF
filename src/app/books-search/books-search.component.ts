import { Component, OnInit} from '@angular/core';
import { BooksService } from '../services/books.service';
import { BooksSearchResultComponent } from '../books-search-result/books-search-result.component';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent implements OnInit {
  //inject our service
  constructor(private service:BooksService){};
  ngOnInit(){}
  //function searchBook() will grab the text input into our search field and
  //run across google books api and find what books match our search term
  //this method currently only supports 10 books
  searchBook(bookTitle:string){
    //declaring variables
    var searchTerm = '';
    var books = [];
    //initial api url
    var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=";
    //grabbing our search term
    searchTerm = bookTitle;
    //replacing spaces with +
    searchTerm.toString();
    searchTerm = searchTerm.replace(/ /g,"+");
    //adding our searchterm to our api
    googleAPI += searchTerm;
    // gets a json object from google books api
    $.getJSON(googleAPI, (response) => this.service.setData(response.items));
    //clear textbox -- I enjoy JQuery
    $('#bookTitle').val('');
  }
}
