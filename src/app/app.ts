import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TzFormComponent } from './components/tz-form/tz-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TzFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('timezone-experiments');
}
