import { Component } from '@angular/core';

@Component({
  selector: 'ng2-map-app',
  templateUrl: './app.html',
})
export class AppComponent {
  public center = 'Brampton, Canada';
  public positions = [ ];
}
