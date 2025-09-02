import { Injectable, signal } from '@angular/core';

export interface TimeData {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
  hour: number;
  minute: number;
  second: number;
  dayProgress: string;
}

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  time = signal<TimeData>({
    year: 0,
    month: 0,
    day: 0,
    dayOfWeek: '',
    hour: 0,
    minute: 0,
    second: 0,
    dayProgress: '0%',
  });

  constructor() {
    setInterval(() => {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
      const totalSeconds = 86400;
      this.time.set({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        dayOfWeek: now.toLocaleDateString('en-VE', { weekday: 'long' }),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        dayProgress:
          ((secondsSinceStart / totalSeconds) * 100).toFixed(2) + '%',
      });
    }, 1000);
  }
}
