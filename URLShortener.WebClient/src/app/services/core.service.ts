import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _baseUrl: string = 'http://165.227.140.149';

  constructor(private _http: HttpClient) { }

  shorten(longUrl: string){
    return this._http.post(this._baseUrl + '/api/tinyUrls/shorten', { longUrl: longUrl }).pipe(map( response => {
      return response;
    }))
  }

  getAllByDate(date?: string){
    if(!date) date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getUTCDate();
    return this._http.get(this._baseUrl + '/api/tinyUrls/ByDate/' + date).pipe(map(response => {
      return response;
    }))
  }
}
