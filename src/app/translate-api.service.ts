import { Injectable,Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TranslateAPIService {
  st;
  constructor(private http: Http) { }
  apicall(txt: string, source: string, target: string): Observable<any> {
    this.st = 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang='+source+'-'+target+
    '&key=trnsl.1.1.20170306T161737Z.c01cfb8a063f8699.8889ed43b52ab1ffccd5ede743b3fb4f755775ee&text='+txt;
    return this.http.get(this.st)
    .map((res: Response) => {
       return res.json();
    })
    .catch((error: any) => Observable.throw(error));
 }
}
