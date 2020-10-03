import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  bookDetails = [
    {
      "bookId":"111",
      "bookName":"java programming",
      "bookCost":"4000",
      "author":"James Gosling"
    },
      {
      "bookId":"112",
      "bookName":"c programming",
      "bookCost":"2000",
      "author":"charles"
    },
    {
      "bookId":"113",
      "bookName":"cpp programming",
      "bookCost":"3000",
      "author":"James cameron"
    },
    {
      "bookId":"114",
      "bookName":"php programming",
      "bookCost":"1000",
      "author":"fleming"
    },
    {
      "bookId":"115",
      "bookName":"sql programming",
      "bookCost":"4500",
      "author":"Johnson"
    },
    {
      "bookId":"116",
      "bookName":"cloud programming",
      "bookCost":"8000",
      "author":"warner"
    },
      ];
      bookDetailsCopy = this.bookDetails;
      filterBy :string;
      
      ngOnInit(): void {
      }
     // Funti0on to remove from row
      onRemoveClicked(i:number){
          this.bookDetailsCopy.splice(i,1);
          this.bookDetails = this.bookDetailsCopy;
      }
      
      
      
}