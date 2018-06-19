import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public http: Http) { }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const api = this.http.get(url).map(
      (res: Response) => this.extractData(res));
    return api;
  }

  extractData(res: Response) {
    const body = res.json();
    return body;
  }
}
