import { Component,Input } from '@angular/core';
import { TranslateAPIService} from './translate-api.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res;
  st;
  input_val = '';
  output_val = '';
  source_lang = 'English';
  target_lang = 'Spanish';
  lang_map = {
    English : 'en',
    Spanish : 'es',
    German : 'de',
  };

  constructor(private serv: TranslateAPIService) {
    }
  dselected(event: any) {
    this.target_lang = event.target.text;
  }
  sselected(event: any) {
    this.source_lang = event.target.text;
  }
   convert() {
    this.serv.apicall(this.input_val, this.lang_map[this.source_lang], this.lang_map[this.target_lang]).then(data =>
    this.output_val = data)
  }
}
