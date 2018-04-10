import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {


  constructor(private http: Http) { }

  createHeader(headers: Headers){
    headers.append('Accept', 'application/json')
    headers.append('Accept-Control-Allow-Origin', '*')
}

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=70d602d308d84a3789f431d76c1982e9')
    .map((res:Response) => res.json());
  }
}

