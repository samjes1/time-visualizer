import { Component } from '@angular/core';
import { TimeVisualizerComponent } from "./time-visualizer/time-visualizer.component";

@Component({
  selector: 'app-root',
  imports: [TimeVisualizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'time-visualizer';
}
