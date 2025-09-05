import { Component, signal } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-visualizer',
  templateUrl: './time-visualizer.component.html',
  styleUrl: './time-visualizer.component.scss',
})
export class TimeVisualizerComponent {



  currentTime = signal(this.getFormattedTime());

  constructor(public timeService: TimeService) {
    setInterval(() => {
      this.currentTime.set(this.getFormattedTime());
    }, 1000);
  }
  
  getFormattedTime(): string {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }
  
}
  

