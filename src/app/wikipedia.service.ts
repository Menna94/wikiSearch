import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface WikiRes{
  query:{
    search:{
      pageid: number;
      title:string;
      snippet:string;
    }[]
  }

}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private _http: HttpClient) { }

  search(term:string){
    return this._http
    .get<WikiRes>(`https://en.wikipedia.org/w/api.php`,{
      params: {
        action:'query',
        format:"json",
        list:'search',
        utf7:'1',
        srsearch:'space',
        origin: '*'
      }
    }).pipe(
      map(q=>q.query),
      map(query=> query.search),
      map(search=> search),
    )
  }
}
