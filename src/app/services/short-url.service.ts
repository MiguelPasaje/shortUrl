import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten'


  constructor(
    private _http:HttpClient
  ) { }

  getUrlShor(nombreUrl:String):Observable<any>{
    // const tokenHeader = new HttpHeaders({Authorization: `Bearer ${this.token}`})
    const body = {
      long_url:nombreUrl
    }
    return this._http.post(this.URL,body/* ,{headers:tokenHeader} */)
  }



}
