import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-visualizer',
  templateUrl: './time-visualizer.component.html',
  styleUrl: './time-visualizer.component.scss',
})
export class TimeVisualizerComponent {
  constructor(public timeService: TimeService) {}
}
