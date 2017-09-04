import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  source_lang = 'English';
  target_lang = 'Spanish';

  dselected(event: any) {
    this.target_lang = event.target.text;
  }
  sselected(event: any) {
    this.source_lang = event.target.text;
  }
}
