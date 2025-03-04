import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = signal('MyPortfolio');

  ngOnInit(): void {
   
  }
}
