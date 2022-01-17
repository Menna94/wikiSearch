import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private _http: HttpClient) { }

  search(term:string){
    return this._http
    .get(`https://en.wikipedia.org/w/api.php`,{
      params: {
        action:'query',
        format:"json",
        list:'search',
        utf7:'1',
        srsearch:'space',
        origin: '*'
      }
    })
  }
}
