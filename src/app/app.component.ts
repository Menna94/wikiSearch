import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Injectable({ providedIn:'root'})
class Car{
  color = 'red';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor(private wiki:WikipediaService, private car:Car){}

  onTerm(term:string){
    this.wiki.search(term)
    .subscribe((pages)=>{
      this.pages = pages;
    })
    
  }
}
