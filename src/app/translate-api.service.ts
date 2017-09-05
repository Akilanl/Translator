import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslateAPIService {
  st = '';
  constructor(private http: Http) { }
  apicall(txt: string, source: string, target: string){
    this.st = 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang='+source+'-'+target+
    '&key=trnsl.1.1.20170306T161737Z.c01cfb8a063f8699.8889ed43b52ab1ffccd5ede743b3fb4f755775ee&text='+txt+
    '&lang=es';
    return this.http.get(this.st).map((response:Response) => {
      response.json();
  }).subscribe();
  }

}
