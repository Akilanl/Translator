import { Component } from '@angular/core';
import { TranslateAPIService} from './translate-api.service';

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

  constructor(private serv: TranslateAPIService) {
    }
  dselected(event: any) {
    this.target_lang = event.target.text;
  }
  sselected(event: any) {
    this.source_lang = event.target.text;
  }
  convert() {
    this.res = this.serv.apicall(this.source_lang, 'en', 'es');
  }
}
