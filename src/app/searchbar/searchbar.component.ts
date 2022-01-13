import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term:string;
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event:any){
    event.preventDefault();
    // console.log(this.term);
    this.submitted.emit(this.term);
  }

}
