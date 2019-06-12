import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIndexedValue } from '../interfaces/IIndexedValue.interface';
import { map } from 'rxjs/operators';



@Injectable()
export class ValueService {

  private strUrl = 'https://api.sammycloud.com/api/values';
  // private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
  private httpOptions = {
    headers: new Headers(
      {
        'Content-Type': 'application/json'
      })
  };
    constructor(private http: Http) { }

    getValues(): Observable <IIndexedValue[]> {
      return this.http.get(this.strUrl, this.httpOptions).pipe(map((response: Response) => <IIndexedValue[]>response.json()));
    }
  

  getValue(id: number): Observable<IIndexedValue> {
    var subURL = this.strUrl + "/" + id;
    return this.http.get(subURL, this.httpOptions).pipe(map((response: Response) => <IIndexedValue>response.json()));
  }

}
