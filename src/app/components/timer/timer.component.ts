import { Component, OnInit } from '@angular/core';
import { formatTime } from './timer.helpers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  host: {
    class: 'timer-comp',
  },
})
export class TimerComponent implements OnInit {
  isPlaying: boolean = false;
  isWork: boolean = true;

  private settingsWorkTime = 5736;
  private settingsPlayTime = 1800;
  currentTime = this.isWork ? this.settingsWorkTime : this.settingsPlayTime;

  formatTime = formatTime;
  private runningInterval: any;

  constructor() {}

  ngOnInit(): void {}

  startTimer(): void {
    this.runningInterval = setInterval(() => this.currentTime--, 1000);
  }

  handleReset() {
    this.isPlaying = false;
    this.currentTime = this.isWork
      ? this.settingsWorkTime
      : this.settingsPlayTime;
    clearInterval(this.runningInterval);
  }

  handlePlayPause() {
    if (!this.isPlaying) this.startTimer();
    if (this.isPlaying) clearInterval(this.runningInterval);

    this.isPlaying = !this.isPlaying;
  }

  handleSkip() {
    this.isWork = !this.isWork;
    this.handleReset();
  }
}
